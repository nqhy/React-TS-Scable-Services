import { createAction } from 'redux-actions';
import { LOADING_PROCESSING, LOADING_REJECT } from './constants';

export const loadingProcesing = createAction(LOADING_PROCESSING);

export const loadingReject = createAction(LOADING_REJECT);
