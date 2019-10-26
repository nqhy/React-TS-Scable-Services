import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useSagaInjector from '../../redux/utils/useSagaInjector';
import useReducerInjector from '../../redux/utils/useReducerInjector';
import { context } from './constants';
import sagas from './sagas';
import reducers from './reducers';
import { galleryRequest, updateFavourties } from './actions';
import { FunctionsName } from './types';
import {
  galleryDataSelector,
  galleryOffsetSelector,
  canFetchMoreSelector,
} from './selectors';

export default () => {
  useSagaInjector(context, sagas);
  useReducerInjector(context, reducers);

  // Hooks Redux
  const dispatch = useDispatch<any>();

  // State Container
  const [selectedFunc, setFunc] = useState<FunctionsName>('search');
  const [searchKey, setSearchKey] = useState<any>(undefined);

  // Selectors
  const dataGallery = useSelector(galleryDataSelector);
  const canFetchMore = useSelector(canFetchMoreSelector);
  const offset = useSelector(galleryOffsetSelector);

  // Actions
  const onHandleFetchMore = () =>
    dispatch(galleryRequest({ value: searchKey, offset, isNewFetch: false }));

  // Life Cycle
  useEffect(() => {
    dispatch(galleryRequest({ value: searchKey, offset: 0, isNewFetch: true }));
  }, [searchKey]);

  // Simple Logic
  const isDisplayFetchMoreButton = dataGallery.length > 0;

  return {
    selectedFunc,
    setFunc,
    searchKey,
    setSearchKey,
    data: dataGallery,
    isDisplayFetchMoreButton,
    onHandleFetchMore,
    canFetchMore,
  };
};
