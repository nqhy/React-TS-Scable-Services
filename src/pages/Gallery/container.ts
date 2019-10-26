import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import useSagaInjector from '../../redux/utils/useSagaInjector';
import useReducerInjector from '../../redux/utils/useReducerInjector';
import { context } from './constants';
import sagas from './sagas';
import reducers from './reducers';
import { galleryRequest } from './actions';
import { FunctionsName } from './types';

export default () => {
  useSagaInjector(context, sagas);
  useReducerInjector(context, reducers);

  const dispatch = useDispatch<any>();

  const [selectedFunc, setFunc] = useState<FunctionsName>('search');

  useEffect(() => {
    dispatch(galleryRequest());
    return () => {};
  }, []);

  return {
    selectedFunc,
    setFunc,
  };
};
