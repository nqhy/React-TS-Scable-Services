import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useSagaInjector from '../../../redux/utils/useSagaInjector';
import useReducerInjector from '../../../redux/utils/useReducerInjector';
import { context } from './constants';
import sagas from './sagas';
import reducers from './reducers';
import { galleryRequest, setSearchKey as setSearchKeyAction } from './actions';
import {
  galleryDataSelector,
  galleryOffsetSelector,
  canFetchMoreSelector,
  gallerySearchKeySelector,
} from './selectors';
import { ImageAttributes } from '../types';

export default () => {
  useSagaInjector(context, sagas);
  useReducerInjector(context, reducers);

  // Hooks Redux
  const dispatch = useDispatch<any>();

  // Selectors
  const dataGallery = useSelector(galleryDataSelector);
  const canFetchMore = useSelector(canFetchMoreSelector);
  const offset = useSelector(galleryOffsetSelector);
  const searchKey = useSelector(gallerySearchKeySelector);

  // Actions
  const onHandleFetchMore = () =>
    dispatch(galleryRequest({ value: searchKey, offset, isNewFetch: false }));
  const setSearchKey = (val: string) => dispatch(setSearchKeyAction(val));

  // Life Cycle
  useEffect(() => {
    if (searchKey !== undefined) {
      dispatch(
        galleryRequest({ value: searchKey, offset: 0, isNewFetch: true }),
      );
    }
  }, [searchKey]);

  // Simple Logic
  const isDisplayFetchMoreButton = dataGallery.length > 0;

  return {
    data: dataGallery,
    isDisplayFetchMoreButton,
    onHandleFetchMore,
    canFetchMore,
    searchKey,
    setSearchKey,
  };
};
