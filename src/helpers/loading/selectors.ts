import { createSelector } from 'reselect';

import { initialState } from './reducer';
import { LoadingInitState } from './types';

export const loadingSelector = (state: any) => state.loading || initialState;

export const loadingStatusSelector = createSelector(
  loadingSelector,
  (state: LoadingInitState) => state.status,
);
