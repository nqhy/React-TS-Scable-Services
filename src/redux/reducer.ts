import { combineReducers } from 'redux';

import favourites from '../pages/Gallery/Favourites/reducers';

const createReducer = (injectedReducers: any = {}) =>
  combineReducers({
    ...injectedReducers,
    favourites,
  });

export default createReducer;
