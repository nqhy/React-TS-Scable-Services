import React, { useEffect } from 'react';
import styled from 'styled-components';

import useContainer from './container';
import { Header } from './shared';
import Search from './Search';
import Favourites from './Favourites';

const Sample: React.SFC<any> = () => {
  const { selectedFunc, setFunc, totalFavourite } = useContainer();

  const isSearch = selectedFunc === 'search';
  return (
    <>
      <Header
        selectedFunc={selectedFunc}
        onHandleSelect={setFunc}
        totalFavourite={totalFavourite}
      />
      <Search isDisplay={isSearch} />
      <Favourites isDisplay={!isSearch} />
    </>
  );
};

export default Sample;
