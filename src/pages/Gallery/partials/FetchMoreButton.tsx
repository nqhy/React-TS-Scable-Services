import React from 'react';
import styled from 'styled-components';

const FetchMoreButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface FetchMoreButtonProps {
  setSearchKey: Function;
  value: string;
}

const FetchMoreButton: React.SFC<FetchMoreButtonProps> = (
  props: FetchMoreButtonProps,
) => {
  const { setSearchKey, value } = props;
  const handleChange = (e: any) => {
    setSearchKey(e.target.value);
  };
  return <FetchMoreButtonWrapper></FetchMoreButtonWrapper>;
};

export default FetchMoreButton;
