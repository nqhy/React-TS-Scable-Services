import { AxiosRequestConfig } from 'axios';
import BaseApiService from '../BaseApiService';

type MethodRequest = 'get' | 'delete' | 'put' | 'patch' | 'post';
export interface APIServiceInitParams {
  config?: AxiosRequestConfig;
}

export interface ErrorResponse {
  code: number;
  description: string;
}

export interface HeaderParams {
  key: string;
  value: string;
}

export interface MicroServicesParams {
  service: BaseApiService;
  config?: AxiosRequestConfig;
}

export interface ErrorCodeType {
  [key: number]: string;
}

export interface APIServiceRequestParams {
  config?: AxiosRequestConfig;
  url: string;
  method: MethodRequest;
  data?: any;
}
