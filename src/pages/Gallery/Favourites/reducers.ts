import { handleActions } from 'redux-actions';
import produce from 'immer';

import { REMOVE_FAVOURITE, ADD_FAVOURITE } from './constants';
import { FavouritesInitState, ImageResponseData, IndexType } from '../types';

export const initialState: FavouritesInitState = {
  data: [],
  errors: '',
};

export default handleActions<any>(
  {
    [ADD_FAVOURITE]: (
      state: FavouritesInitState,
      { payload }: { payload: ImageResponseData },
    ) =>
      produce(state, draft => {
        const indexFavourite = draft.data.length;
        const newPayload = {
          ...payload,
          indexFavourite,
        };
        draft.data.push(newPayload);
      }),
    [REMOVE_FAVOURITE]: (
      state: FavouritesInitState,
      { payload }: { payload: IndexType },
    ) =>
      produce(state, draft => {
        const { indexFavourite } = payload;
        draft.data.splice(indexFavourite, 1);
        draft.data.map((_, index) => {
          draft.data[index].indexFavourite = index;
        });
      }),
  },
  initialState,
);
