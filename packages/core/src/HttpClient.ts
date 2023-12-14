export type HttpMethod = 'get' | 'post';
export type HttpResponseType = 'json';
export type HttpHeaders = {[key: string]: string};

export type RequestBaseOptions = {
  url: string;
  headers?: HttpHeaders;
};
export type ResultBase = {
  data: undefined;
};

export type SendRequestOptions = {
  url: string;
  method: HttpMethod;
  responseType: HttpResponseType;
  headers?: HttpHeaders;
};
export type SendRequestResult = ResultBase;

export type GetOptions = RequestBaseOptions;
export type GetResult = ResultBase;

export type PostOptions = RequestBaseOptions & {
  responseType: HttpResponseType;
};
export type PostResult = ResultBase;

export abstract class HttpClient {
  abstract sendRequest(options: SendRequestOptions): Promise<SendRequestResult>;
  abstract get(options: GetOptions): Promise<GetResult>;
  abstract post(options: PostOptions): Promise<PostResult>;
}
