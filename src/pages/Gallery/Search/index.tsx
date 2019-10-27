import React from 'react';
import styled, { css } from 'styled-components';

import useContainer from './container';
import { LoadingStatus } from '../../../helpers/loading/types';
import { SearchBar, Gallery, FetchMoreButton } from '../shared';
import Loader from '../../../components/Loader';

const Wrapper = styled.div<{ isDisplay: boolean }>`
  ${({ isDisplay }) =>
    !isDisplay &&
    css`
      display: none;
    `}
`;

interface Props {
  isDisplay: boolean;
  loadingStatus: LoadingStatus;
}

const Sample: React.SFC<Props> = ({ isDisplay, loadingStatus }: Props) => {
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
      {loadingStatus !== 'isProcessing' ? (
        <Gallery data={data} />
      ) : (
        <Loader size={100} block />
      )}
      <FetchMoreButton
        isDisplay={isDisplayFetchMoreButton}
        onSubmit={onHandleFetchMore}
        canFetchMore={canFetchMore}
      />
    </Wrapper>
  );
};

export default Sample;
