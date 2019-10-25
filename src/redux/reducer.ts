import { combineReducers } from 'redux';

const createReducer = (injectedReducers: any = {}) =>
  combineReducers({
    ...injectedReducers,
  });

export default createReducer;
