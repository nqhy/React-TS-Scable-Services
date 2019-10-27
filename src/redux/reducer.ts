import { combineReducers } from 'redux';

import favourites from '../pages/Gallery/Favourites/reducers';
import loading from '../helpers/loading/reducer';

const createReducer = (injectedReducers: any = {}) =>
  combineReducers({
    ...injectedReducers,
    favourites,
    loading,
  });

export default createReducer;
