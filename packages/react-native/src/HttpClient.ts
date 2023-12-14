import {
  GetOptions,
  GetResult,
  PostOptions,
  PostResult,
  SendRequestOptions,
  SendRequestResult,
} from '@spryrocks/mobile-http-plugin-core';
import {HttpClient as CoreHttpClient} from '@spryrocks/mobile-http-plugin-core';

export class HttpClient extends CoreHttpClient {
  override async sendRequest(options: SendRequestOptions): Promise<SendRequestResult> {
    const method =
      options.method === 'get' ? 'GET' : options.method === 'post' ? 'POST' : undefined;
    const data = options.method === 'post' ? options.data : undefined;
    const requestOptions: RequestInit = {
      method,
      headers: options.headers,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      body: JSON.stringify(data),
    };
    const response = await fetch(options.url, requestOptions);
    return {data: await response.json()};
  }

  override async get(options: GetOptions): Promise<GetResult> {
    return this.sendRequest({method: 'get', ...options});
  }

  override async post(options: PostOptions): Promise<PostResult> {
    return this.sendRequest({method: 'post', ...options});
  }
}
