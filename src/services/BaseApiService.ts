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
    const { code, description } = err;
    if (ERROR_CODE[code] === '404') return history.push('/not-found');
    // Handle Description Latter
    throw err;
  }

  public async request({ method, url, data, config }: APIServiceRequestParams) {
    try {
      if (method === 'get' || method === 'delete') {
        return await this.instance[method](url, config);
      }
      return await this.instance[method](url, data, config);
    } catch (err) {
      return this.handleError(err);
    }
  }
}

