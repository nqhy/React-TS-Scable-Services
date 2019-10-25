import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useSagaInjector from '../../redux/utils/useSagaInjector';
import useReducerInjector from '../../redux/utils/useReducerInjector';
import { context } from './constants';
import sagas from './sagas';
import reducers from './reducers';
import { galleryRequest } from './actions';

const Sample = () => {
  useSagaInjector(context, sagas);
  useReducerInjector(context, reducers);

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(galleryRequest());
    return () => {};
  }, []);

  return <h1>Huy D</h1>;
};

export default Sample;
