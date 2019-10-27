import createSagaMiddleware from 'redux-saga';

import { loadingProcesing, loadingReject } from '../helpers/loading/actions';

export const sagaMiddleware = createSagaMiddleware();

const middleware: any = [sagaMiddleware];

const loadingMiddleware = (store: any) => (next: any) => (action: any) => {
  const { type } = action;
  next(action);
  if (type.includes('Request')) next(loadingProcesing());
  if (type.includes('Success') || type.includes('Fail')) {
    next(loadingReject());
  }
};

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');
  const invariant = require('redux-immutable-state-invariant').default;
  middleware.push(invariant());
  middleware.push(createLogger({ collapsed: true }));
  middleware.push(loadingMiddleware);
}

export default middleware;
