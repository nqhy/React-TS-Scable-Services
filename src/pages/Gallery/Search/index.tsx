import React from 'react';
import styled, { css } from 'styled-components';

import useContainer from './container';
import { SearchBar, Gallery, FetchMoreButton } from '../shared';

const Wrapper = styled.div<{ isDisplay: boolean }>`
  ${({ isDisplay }) =>
    !isDisplay &&
    css`
      display: none;
    `}
`;

interface Props {
  isDisplay: boolean;
}

const Sample: React.SFC<Props> = ({ isDisplay }: Props) => {
  const {
    data,
    isDisplayFetchMoreButton,
    onHandleFetchMore,
    canFetchMore,
    searchKey,
    setSearchKey,
  } = useContainer();

  return (
    <Wrapper isDisplay={isDisplay}>
      <SearchBar setSearchKey={setSearchKey} value={searchKey} />
      <Gallery data={data} />
      <FetchMoreButton
        isDisplay={isDisplayFetchMoreButton}
        onSubmit={onHandleFetchMore}
        canFetchMore={canFetchMore}
      />
    </Wrapper>
  );
};

export default Sample;
