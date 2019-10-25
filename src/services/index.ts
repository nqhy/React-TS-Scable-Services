import BaseApiService from './BaseApiService';
import SampleService from './SampleService';

const V1 = new BaseApiService();

export const sampleService = new SampleService({ service: V1 });
