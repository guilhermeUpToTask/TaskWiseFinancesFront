// send request
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
} from "axios"

import { ApiRequestOptions } from "./ApiRequestOptions";
import { ApiResult } from "./ApiResult";
import { ApiError } from "./ApiError";


const getUrl = (options: ApiRequestOptions): string => {
  const encoder = encodeURI

  //replace the path placeholder with the path params
  const urlWithPath = options.url
    .replace(/{(.*?)}/g, (substring: string, group: string) => {
      if (options.path && Object.prototype.hasOwnProperty.call(options.path, group)) {
        return encoder(String(options.path[group]))
      }
      return substring
    })
  return options.query ? urlWithPath + getQueryString(options.query) : urlWithPath
}


function getRequestBody(options: ApiRequestOptions) {
  return options.body ? options.body : undefined
}

//function getHeaders(options: ApiRequestOptions) { }
function getQueryString(query?: Record<string, unknown>): string {
  // Check if query is empty or undefined, return an empty string if so
  if (!query || Object.keys(query).length === 0) {
    return '';
  }

  // Use Object.entries to iterate and create the query string
  const queryString = Object.entries(query)
    .map(([key, value]) => {
      // Convert the value to a string and encode it for use in URLs
      return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
    })
    .join('&');

  return `?${queryString}`; // Prefix with '?' for URL compatibility
}

export const isSuccess = (status: number): boolean => {
  return status >= 200 && status < 300
}


//verify if that have a response body
export const getResponseBody = (response: AxiosResponse<unknown>): unknown => {
  if (response.status !== 204) {
    return response.data
  }
  return undefined
}


export const sendRequest = async <T>(
  options: ApiRequestOptions,
  url: string,
  body: unknown,
  axiosClient: AxiosInstance,
): Promise<AxiosResponse<T>> => {


  const requestConfig: AxiosRequestConfig = {
    data: body,
    method: options.method,
    url: url,
  }

  try {
    const result = axiosClient.request(requestConfig);

    return await result
  } catch (error) {
    const axiosError = error as AxiosError<T>
    //if is a response error return the response
    if (axiosError.response)
      return axiosError.response
    //if not propagate the error
    throw error;
  }
}

export const catchErrorCodes = (
  options: ApiRequestOptions,
  result: ApiResult,
): void => {
  const errors: Record<number, string> = {
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Payload Too Large",
    414: "URI Too Long",
    415: "Unsupported Media Type",
    416: "Range Not Satisfiable",
    417: "Expectation Failed",
    418: "Im a teapot",
    421: "Misdirected Request",
    422: "Unprocessable Content",
    423: "Locked",
    424: "Failed Dependency",
    425: "Too Early",
    426: "Upgrade Required",
    428: "Precondition Required",
    429: "Too Many Requests",
    431: "Request Header Fields Too Large",
    451: "Unavailable For Legal Reasons",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    506: "Variant Also Negotiates",
    507: "Insufficient Storage",
    508: "Loop Detected",
    510: "Not Extended",
    511: "Network Authentication Required",
    ...options.errors,
  }

  const error = errors[result.status]
  if (error) {
    throw new ApiError(options, result, error)
  }
}

//WE NEEED To add more console.logs to se what is happening
export const request = async <T>(
  options: ApiRequestOptions,
  axiosClient: AxiosInstance,
): Promise<T> => {
  const url = getUrl(options);
  const body = getRequestBody(options);

  try {
    const response = await sendRequest<T>(options, url, body, axiosClient);
    const responseBody = getResponseBody(response);

    const result: ApiResult = {
      url,
      ok: isSuccess(response.status),
      status: response.status,
      statusText: response.statusText,
      body: responseBody,
    };

    //treat response errors code
    catchErrorCodes(options, result)

    //need to type guard before return
    //We later will change that after refactor the backend
    const { data } = result.body as { data: T };
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      console.error('API Error:', error.status, error.message,);
      throw error; // Re-throw if you want to propagate the error further
    }

    // Handle other types of errors
    console.error('An unexpected error occurred:', error);
    throw error; // Re-throw for further handling
  }
};

