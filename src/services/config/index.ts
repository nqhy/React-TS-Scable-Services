import { AxiosRequestConfig } from 'axios';

import { ErrorCodeType } from './types';

const defaultConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_URL_API,
  timeout: 5000,
};

const ERROR_CODE: ErrorCodeType = {
  1001: '404',
};

export { defaultConfig, ERROR_CODE };
