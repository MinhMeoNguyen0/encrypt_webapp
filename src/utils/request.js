

// request.js
import request from 'umi-request';
import { getAccessToken } from './utils';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

request.extendOptions({ prefix: REACT_APP_API_URL });

request.interceptors.request.use(
(url, options) => {
    return {
    url,
    options: { ...options, headers: { ...options.headers, 'x-access-token': getAccessToken() } },
    };
},
{ global: true },
);

export default request;
