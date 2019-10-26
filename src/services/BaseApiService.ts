import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import _merge from 'lodash/merge';

import {
  APIServiceInitParams,
  APIServiceRequestParams,
  ErrorResponse,
  HeaderParams,
} from './config/types';
import { defaultConfig, ERROR_CODE } from './config';
import history from '../utils/history';
import HandleError from '../helpers/handleErrors';

export default class BaseAPIService {
  private instance: AxiosInstance;

  private headers: any;

  private config: AxiosRequestConfig;

  constructor(config: AxiosRequestConfig = {}) {
    this.config = _merge(defaultConfig, config);
    this.instance = axios.create(this.config);
    this.headers = this.instance.defaults.headers;
  }

  public setHeader({ key, value }: HeaderParams) {
    this.headers[key] = value;
  }

  public handleError(err: ErrorResponse) {
    const handleError = new HandleError<any>(err);
    const code: string = handleError.code;
    if (code === '404') return history.push('/404');
    // Handle Description Latter
    throw err;
  }

  public async request({ method, url, data, config }: APIServiceRequestParams) {
    try {
      const newConfig = _merge(config, this.config);
      if (method === 'get' || method === 'delete') {
        return await this.instance[method](url, newConfig);
      }
      return await this.instance[method](url, data, newConfig);
    } catch (err) {
      return this.handleError(err);
    }
  }
}
