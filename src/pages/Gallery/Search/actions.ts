import { createAction } from 'redux-actions';

import { createReduxActions } from '../../../redux/utils/createReduxActions';
import { context, SET_SEARCH_KEY } from './constants';

export const [galleryRequest, gallerySuccess, galleryFail] = createReduxActions(
  context,
);

export const setSearchKey = createAction(SET_SEARCH_KEY);
