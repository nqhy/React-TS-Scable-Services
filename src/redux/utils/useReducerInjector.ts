import { useEffect } from 'react';

import { store } from '../store';

export default (key: any, reducer: object) => {
  useEffect(() => {
    store.injectReducer(key, reducer);
  }, [key, reducer]);
};
