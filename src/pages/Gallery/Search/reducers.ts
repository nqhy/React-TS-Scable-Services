import { handleActions } from 'redux-actions';
import produce from 'immer';
import _merge from 'lodash/merge';

import { GALLERY_SUCCESS, GALLERY_FAIL, SET_SEARCH_KEY } from './constants';

import {
  GalleryInitState,
  ImageResponse,
  ImageGiphyResponseData,
  ImageAttributes,
  IndexType,
} from '../types';
import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../Favourites/constants';

export const initialState: GalleryInitState = {
  data: [],
  searchKey: undefined,
  pagination: {
    // eslint-disable-next-line @typescript-eslint/camelcase
    total_count: 0,
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
        const {
          result: { data, pagination },
          isNewFetch,
          favouriteData = [],
        } = payload;
        const checkInFavouriteData = (id: string) => {
          let result = false;
          favouriteData.map(value => {
            if (value.id === id) {
              result = true;
              return result;
            }
          });
          return result;
        };
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
            const newIndex = index + addingOffset;
            draft.data[newIndex] = {};
            draft.data[newIndex].url = value.images.original.url;
            draft.data[newIndex].url = value.images.original.url;
            draft.data[newIndex].type = value.type;
            draft.data[newIndex].id = value.id;
            draft.data[newIndex].indexSearch = newIndex;
            if (checkInFavouriteData(value.id)) {
              draft.data[newIndex].stage = 'favourite';
            } else draft.data[newIndex].stage = 'default';
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
    [SET_SEARCH_KEY]: (state, { payload }: { payload: string }) =>
      produce(state, (draft: any) => {
        draft.searchKey = payload;
      }),
    [ADD_FAVOURITE]: (state, { payload }: { payload: ImageAttributes }) =>
      produce(state, (draft: any) => {
        const { indexSearch } = payload;
        draft.data[indexSearch].stage = 'favourite';
      }),
    [REMOVE_FAVOURITE]: (state, { payload }: { payload: IndexType }) =>
      produce(state, (draft: any) => {
        const { indexSearch } = payload;
        draft.data[indexSearch].stage = 'default';
      }),
  },
  initialState,
);
