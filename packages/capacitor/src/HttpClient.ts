import {
  GetOptions,
  GetResult,
  PostOptions,
  PostResult,
  SendRequestOptions,
  SendRequestResult,
} from '@spryrocks/mobile-http-plugin-core';
import {Http, HttpOptions} from '@capacitor-community/http';
import {HttpClient as CoreHttpClient} from '@spryrocks/mobile-http-plugin-core';

export class HttpClient extends CoreHttpClient {
  override async sendRequest(options: SendRequestOptions): Promise<SendRequestResult> {
    const method =
      options.method === 'get' ? 'GET' : options.method === 'post' ? 'POST' : undefined;
    const data = options.method === 'post' ? options.data : undefined;
    const requestOptions: HttpOptions = {
      method,
      data,
      headers: options.headers,
      url: options.url,
    };
    const response = await Http.request(requestOptions);
    return {data: response.data};
  }

  override async get(options: GetOptions): Promise<GetResult> {
    return this.sendRequest({method: 'get', ...options});
  }

  override async post(options: PostOptions): Promise<PostResult> {
    return this.sendRequest({method: 'post', ...options});
  }
}
