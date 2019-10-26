import MicroServices from './config/MicroServices';

export default class SampleService extends MicroServices {
  public getImages = async (param: string) => {
    const response = await this.client.request({
      method: 'get',
      url: '/search',
      config: {
        params: {
          q: param,
        },
      },
    });

    return response;
  };
}
