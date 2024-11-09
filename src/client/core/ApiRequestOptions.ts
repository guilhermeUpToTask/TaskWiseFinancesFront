// api request options type
export type ApiRequestOptions = {
  readonly method:
  | 'GET'
  | 'PUT'
  | 'POST'
  | 'DELETE'
  | 'OPTIONS'
  | 'HEAD'
  | 'PATCH'
  readonly url:string
  readonly path?:string
  headers?: Record<string, string>
  readonly body?: unknown
  readonly errors?: Record<number, string>

};