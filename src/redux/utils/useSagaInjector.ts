import { useEffect } from 'react';

import { store } from '../store';
import { ONCE_TILL_UNMOUNT } from '../constants';

export default (key: any, saga: any, mode = ONCE_TILL_UNMOUNT) => {
  useEffect(() => {
    store.injectSaga(key, saga, mode);
    return () => {
      store.ejectSaga(key);
    };
  }, [key, saga, mode]);
};
