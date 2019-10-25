import { handleActions } from 'redux-actions';
import produce from 'immer';

import { GALLERY_SUCCESS, GALLERY_FAIL } from './constants';
import { GalleryInitState } from './types';

export const initialState: GalleryInitState = {
  images: [],
};

export default handleActions(
  {
    [GALLERY_SUCCESS]: state =>
      produce(state, draft => {
        draft.images.push('Success');
      }),
    [GALLERY_FAIL]: state => {
      return produce(state, draft => {
        draft.images.push('Fail');
      });
    },
  },
  initialState,
);
