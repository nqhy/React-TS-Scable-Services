import { createAction } from 'redux-actions';

import { REMOVE_FAVOURITE, ADD_FAVOURITE } from './constants';

export const removeFavourite = createAction(REMOVE_FAVOURITE);
export const addFavourite = createAction(ADD_FAVOURITE);
