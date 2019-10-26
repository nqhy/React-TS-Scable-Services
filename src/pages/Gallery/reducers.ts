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

export const initialState: GalleryInitState = {
  data: [],
  pagination: {
    // eslint-disable-next-line @typescript-eslint/camelcase
    total_count: 0,
    count: 0,
    offset: 0,
  },
  favourites: [],
  errors: '',
};

export default handleActions<any>(
  {
    [GALLERY_SUCCESS]: (
      state,
      { payload }: { payload: ImageResponse<ImageGiphyResponseData> },
    ) =>
      produce(state, (draft: any) => {
        const {
          result: { data, pagination },
          isNewFetch,
        } = payload;
        if (data.length === 0) {
          draft.data = [];
          draft.pagination = {
            count: 0,
            offset: 0,
          };
        } else {
          const {
            pagination: { offset },
          } = draft;
          if (isNewFetch) draft.data = [];
          const addingOffset = isNewFetch ? 0 : offset;
          data.map((value: ImageGiphyResponseData, index) => {
            draft.data[index + addingOffset] = {};
            draft.data[index + addingOffset].url = value.images.original.url;
            draft.data[index + addingOffset].stage = 'default';
            draft.data[index + addingOffset].url = value.images.original.url;
            draft.data[index + addingOffset].type = value.type;
            draft.data[index + addingOffset].id = value.id;
          });
          draft.pagination = pagination;
          if (isNewFetch) draft.pagination.offset = 0 + pagination.count;
          else draft.pagination.offset = offset + pagination.count;
        }
      }),

    [GALLERY_FAIL]: (state, { payload }: { payload: string }) =>
      produce(state, (draft: any) => {
        draft.errors = payload;
      }),
  },
  initialState,
);
