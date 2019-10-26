import React, { useEffect } from 'react';
import styled from 'styled-components';

import useContainer from './container';
import { Header, SearchBar, Gallery } from './partials';

const Sample: React.SFC<any> = () => {
  const {
    data,
    selectedFunc,
    setFunc,
    setSearchKey,
    searchKey,
  } = useContainer();

  return (
    <>
      <Header selectedFunc={selectedFunc} onHandleSelect={setFunc} />
      <SearchBar setSearchKey={setSearchKey} value={searchKey} />
      <Gallery data={data} />
    </>
  );
};

export default Sample;
