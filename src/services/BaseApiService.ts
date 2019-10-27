import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import _merge from 'lodash/merge';

import { APIServiceRequestParams, HeaderParams } from './config/types';
import { defaultConfig } from './config';

export default class BaseAPIService {
  private instance: AxiosInstance;

  private headers: any;

  private config: AxiosRequestConfig;

  private ErrorHandler: any;

  constructor(config: AxiosRequestConfig = {}) {
    this.config = _merge(defaultConfig, config);
    this.instance = axios.create(this.config);
    this.headers = this.instance.defaults.headers;
  }

  public setHeader({ key, value }: HeaderParams) {
    this.headers[key] = value;
  }

  set errorHandlerService(value: any) {
    this.ErrorHandler = value;
  }

  public async request({ method, url, data, config }: APIServiceRequestParams) {
    try {
      const newConfig = _merge(config, this.config);
      if (method === 'get' || method === 'delete') {
        return await this.instance[method](url, newConfig);
      }
      return await this.instance[method](url, data, newConfig);
    } catch (err) {
      const errorHandler = new this.ErrorHandler(err);
      errorHandler.process();
    }
  }
}
