import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { context } from './constants';
import reducers from './reducers';
import { favouritesDataSelector } from './selectors';

export default () => {
  // Hooks Redux
  const dispatch = useDispatch<any>();

  // Selectors
  const data = useSelector(favouritesDataSelector);

  return {
    data,
  };
};
