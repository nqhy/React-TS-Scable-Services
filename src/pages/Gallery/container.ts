import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useSagaInjector from '../../redux/utils/useSagaInjector';
import useReducerInjector from '../../redux/utils/useReducerInjector';
import { context } from './constants';
import sagas from './sagas';
import reducers from './reducers';
import { galleryRequest } from './actions';
import { FunctionsName } from './types';
import { galleryDataSelector } from './selectors';

export default () => {
  useSagaInjector(context, sagas);
  useReducerInjector(context, reducers);
  const dataGallery = useSelector(galleryDataSelector);

  const [searchKey, setSearchKey] = useState<any>(undefined);

  const dispatch = useDispatch<any>();

  const [selectedFunc, setFunc] = useState<FunctionsName>('search');

  useEffect(() => {
    dispatch(galleryRequest(searchKey));
  }, [searchKey]);

  return {
    selectedFunc,
    setFunc,
    searchKey,
    setSearchKey,
    data: dataGallery,
  };
};
