import { createAction } from 'redux-actions';

import { createReduxActions } from '../../redux/utils/createReduxActions';
import { context } from './constants';

export const [galleryRequest, gallerySuccess, galleryFail] = createReduxActions(
  context,
);

export const updateFavourties = createAction('updateFavourties');
