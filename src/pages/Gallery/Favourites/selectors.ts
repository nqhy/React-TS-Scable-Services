import { createSelector } from 'reselect';

import { initialState } from './reducers';
import { FavouritesInitState } from '../types';

const favouritesSelector = (state: any) => state.favourites || initialState;

export const favouritesDataSelector = createSelector(
  favouritesSelector,
  state => state.data,
);

export const totalFavouriteSelector = createSelector(
  favouritesSelector,
  state => state.data.length,
);
