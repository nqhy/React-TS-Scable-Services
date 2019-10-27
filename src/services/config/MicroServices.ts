import BaseApiService from '../BaseApiService';
import { MicroServicesParams } from './types';

export default class MicroServices extends BaseApiService {
  public client: BaseApiService;

  constructor({ config, service }: MicroServicesParams) {
    super(config);
    this.client = service;
  }
}
