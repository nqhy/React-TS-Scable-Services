import MicroServices from './config/MicroServices';

export default class SampleService extends MicroServices {
  public getImages = async ({
    value,
    offset,
  }: {
    value: string;
    offset: number;
  }) => {
    const response = await this.client.request({
      method: 'get',
      url: '/search',
      config: {
        params: {
          q: value,
          offset: offset,
        },
      },
    });

    return response;
  };
}
