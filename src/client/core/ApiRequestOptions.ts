
//the api request type, with the method and url
export type ApiRequestOptions = {
  readonly method:
    | "GET"
    | "PUT"
    | "POST"
    | "DELETE"
    | "OPTIONS"
    | "HEAD"
    | "PATCH"
  readonly url: string
  readonly path?: Record<string, unknown>
  readonly cookies?: Record<string, unknown>
  readonly headers?: Record<string, unknown>
  readonly query?: Record<string, unknown>
  readonly formData?: Record<string, unknown>
  readonly body?: unknown
  readonly responseHeader?: string
  readonly errors?: Record<number, string>
}
