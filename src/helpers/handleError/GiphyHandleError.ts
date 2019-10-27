import { toast } from 'react-toastify';

import HandleError from './index';
import { GiphyError } from './types';

export default class GiphyHandleError extends HandleError<GiphyError> {
  get code() {
    return this.error.response.status;
  }

  public process() {
    toast.error(this.error.response.data.message);
  }
}
