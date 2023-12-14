import {HttpClient} from './HttpClient';

const impl = new HttpClient();

export * from '@spryrocks/mobile-http-plugin-core';
export {impl as HttpClient};
