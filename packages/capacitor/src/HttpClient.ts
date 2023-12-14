import {
  GetOptions,
  GetResult,
  PostOptions,
  PostResult,
  SendRequestOptions,
  SendRequestResult,
} from '@spryrocks/mobile-http-plugin-core';
import {CapacitorHttp} from '@capacitor/core';
import {HttpClient as CoreHttpClient} from '@spryrocks/mobile-http-plugin-core';

export class HttpClient extends CoreHttpClient {
  override async sendRequest(options: SendRequestOptions): Promise<SendRequestResult> {
    const method = options.method;
    if (method === 'get') {
      return this.get(options);
    } else if (method === 'post') {
      return this.post(options);
    } else {
      throw new Error(`Not supported method: ${method}`);
    }
  }

  override async get(options: GetOptions): Promise<GetResult> {
    const result = await CapacitorHttp.get({
      url: options.url,
      headers: options.headers,
    });
    return {data: result.data};
  }

  override async post(options: PostOptions): Promise<PostResult> {
    const result = await CapacitorHttp.post({
      url: options.url,
      headers: options.headers,
      data: options.data,
      responseType: options.responseType,
    });
    return {data: result.data};
  }
}
