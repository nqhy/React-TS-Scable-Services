import { handleActions } from 'redux-actions';
import produce from 'immer';
import _merge from 'lodash/merge';

import { LOADING_PROCESSING, LOADING_REJECT } from './constants';

import { LoadingInitState } from './types';

export const initialState: LoadingInitState = {
  status: 'isRejected',
};

export default handleActions<any>(
  {
    [LOADING_PROCESSING]: state =>
      produce(state, (draft: any) => {
        draft.status = 'isProcessing';
      }),
    [LOADING_REJECT]: state =>
      produce(state, (draft: any) => {
        draft.status = 'isRejected';
      }),
  },
  initialState,
);
