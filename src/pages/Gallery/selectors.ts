import { createSelector } from 'reselect';

import { initialState } from './reducers';
import { GalleryInitState } from './types';

const gallerySelector = (state: any) => state.gallery || initialState;

export const galleryDataSelector = createSelector(
  gallerySelector,
  (state: GalleryInitState) => state.data,
);

export const galleryPaginationSelector = createSelector(
  gallerySelector,
  state => state.pagination,
);

export const galleryOffsetSelector = createSelector(
  galleryPaginationSelector,
  state => state.offset,
);

export const canFetchMoreSelector = createSelector(
  galleryPaginationSelector,
  state => state.offset < state.total_count,
);
