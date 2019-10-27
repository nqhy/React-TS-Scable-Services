import { useState } from 'react';
import { useSelector } from 'react-redux';

import { FunctionsName } from './types';
import { totalFavouriteSelector } from './Favourites/selectors';
import { loadingStatusSelector } from '../../helpers/loading/selectors';

export default () => {
  const [selectedFunc, setFunc] = useState<FunctionsName>('search');

  const totalFavourite = useSelector(totalFavouriteSelector);
  const loadingStatus = useSelector(loadingStatusSelector);

  return {
    selectedFunc,
    setFunc,
    totalFavourite,
    loadingStatus,
  };
};
