import { createSelector } from 'reselect';

import { initialState } from './reducers';

const gallerySelector = (state: any) => state.gallery || initialState;

export const galleryDataSelector = createSelector(
  gallerySelector,
  state => state.data,
);
