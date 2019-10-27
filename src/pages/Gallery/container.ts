import { useState } from 'react';
import { useSelector } from 'react-redux';

import { FunctionsName } from './types';
import { totalFavouriteSelector } from './Favourites/selectors';

export default () => {
  const [selectedFunc, setFunc] = useState<FunctionsName>('search');

  const totalFavourite = useSelector(totalFavouriteSelector);

  return {
    selectedFunc,
    setFunc,
    totalFavourite,
  };
};
