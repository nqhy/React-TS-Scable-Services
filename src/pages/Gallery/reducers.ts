import { handleActions } from 'redux-actions';
import produce from 'immer';

import { GALLERY_SUCCESS, GALLERY_FAIL } from './constants';
import {
  GalleryInitState,
  ImageResponse,
  ImageAttributes,
  ImageGiphyResponseData,
  ImageResponseData,
} from './types';

export const initialState: GalleryInitState<ImageResponseData> = {
  data: [],
  pagination: {
    count: 0,
    offset: 0,
  },
  errors: '',
};

export default handleActions<any>(
  {
    [GALLERY_SUCCESS]: (
      state,
      { payload }: { payload: ImageResponse<ImageGiphyResponseData> },
    ) =>
      produce(state, (draft: any) => {
        const { data, pagination } = payload;
        if (data.length === 0) {
          draft.data = [];
          draft.pagination = {
            count: 0,
            offset: 0,
          };
        } else {
          data.map((value: ImageGiphyResponseData, index) => {
            draft.data[index] = {};
            draft.data[index].url = value.images.original.url;
            draft.data[index].url = value.images.original.url;
            draft.data[index].stage = 'default';
            draft.data[index].type = value.type;
            draft.data[index].id = value.id;
          });
          draft.pagination = pagination;
          draft.pagination.offset = draft.pagination.offset + pagination.count;
        }
      }),

    [GALLERY_FAIL]: (state, { payload }: { payload: string }) =>
      produce(state, (draft: any) => {
        draft.errors = payload;
      }),
  },
  initialState,
);
