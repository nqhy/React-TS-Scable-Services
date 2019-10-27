import BaseApiService from './BaseApiService';
import SearchService from './SearchService';
import { limitGiphyImages } from '../constants';
import GiphyHandleError from '../helpers/handleError/GiphyHandleError';

const GiphySearchService = new BaseApiService({
  baseURL: process.env.REACT_APP_GIPHY_URL_API,
  params: {
    // eslint-disable-next-line @typescript-eslint/camelcase
    api_key: process.env.GIPHY_KEY,
  },
});

GiphySearchService.errorHandlerService = GiphyHandleError;

export const searchServiceByGiphy = new SearchService({
  service: GiphySearchService,
  config: {
    params: {
      limit: limitGiphyImages,
    },
  },
});
