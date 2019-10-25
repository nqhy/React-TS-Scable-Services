import MicroServices from './config/MicroServices';

export default class SampleService extends MicroServices {
  public fetchData = async () => {
    const response = await this.client.request({
      method: 'get',
      url: '/sample-fetch',
    });

    return response;
  };
}

