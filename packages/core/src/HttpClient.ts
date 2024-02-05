export type HttpResponseType = 'json';
export type HttpHeaders = {[key: string]: string};

export type RequestBaseOptions = {
  url: string;
  headers?: HttpHeaders;
  responseType: HttpResponseType;
  readTimeout?: number;
  connectTimeout?: number;
};
export type ResultBase = {
  data: undefined;
};

export type GetOptions = RequestBaseOptions;
export type GetResult = ResultBase;

export type PostOptions = RequestBaseOptions & {
  data: unknown;
};
export type PostResult = ResultBase;

export type SendRequestOptions =
  | ({
      method: 'get';
    } & GetOptions)
  | ({
      method: 'post';
    } & PostOptions);
export type SendRequestResult = ResultBase;

export abstract class HttpClient {
  abstract sendRequest(options: SendRequestOptions): Promise<SendRequestResult>;
  abstract get(options: GetOptions): Promise<GetResult>;
  abstract post(options: PostOptions): Promise<PostResult>;
}
