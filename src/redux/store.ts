import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducer';
import middleware, { sagaMiddleware } from './middleware';
import { ONCE_TILL_UNMOUNT, DAEMON } from './constants';

const reducer = persistReducer(
  {
    key: 'root',
    storage,
    whitelist: ['favourites'],
  },
  rootReducer,
);

const enhancers = [];
// Dev tools are helpful
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = (window as any)[
    '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'
  ];
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const configStore = (initialState = {}) => {
  const store: any = createStore(reducer, initialState, composedEnhancers);

  // eslint-disable-next-line no-undef
  if ((module as any)['hot']) {
    // eslint-disable-next-line no-undef
    (module as any)['hot'].accept('./reducer', () => {
      store.replaceReducer(rootReducer());
    });
  }

  store.injectedSagas = {};
  store.injectedReducers = {};

  store.injectSaga = (key: any, saga: any, mode: any) => {
    const hasSaga = Reflect.has(store.injectedSagas, key);
    if (!hasSaga || mode === ONCE_TILL_UNMOUNT) {
      store.injectedSagas[key] = { saga, mode, task: sagaMiddleware.run(saga) };
    }
  };

  store.ejectSaga = (key: any) => {
    if (!Reflect.has(store.injectedSagas, key)) return;
    const { task, mode } = store.injectedSagas[key];
    if (mode !== DAEMON) task.cancel();
  };

  store.injectReducer = (key: any, _reducer: any) => {
    if (Reflect.has(store.injectedReducers, key)) return;
    store.injectedReducers[key] = _reducer;
    store.replaceReducer(rootReducer(store.injectedReducers));
    return store;
  };

  return {
    persistor: persistStore(store),
    store,
  };
};

const { store, persistor } = configStore();

(global as any).store = store;

export { store, persistor };
