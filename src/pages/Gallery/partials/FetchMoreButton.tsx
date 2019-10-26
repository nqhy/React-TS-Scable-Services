import React from 'react';
import styled from 'styled-components';

const FetchMoreButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 3%;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  background: black;
  color: white;
  font-size: 22px;
  border-radius: 30px;
  font-weight: 700;
  &:disabled {
    opacity: 0.5;
  }
`;

interface FetchMoreButtonProps {
  onSubmit: any;
  isDisplay: boolean;
  canFetchMore: boolean;
}

const FetchMoreButton: React.SFC<FetchMoreButtonProps> = (
  props: FetchMoreButtonProps,
) => {
  const { isDisplay, onSubmit, canFetchMore } = props;
  if (!isDisplay) return null;
  return (
    <FetchMoreButtonWrapper>
      <Button disabled={!canFetchMore} onClick={onSubmit}>
        Fetch More
      </Button>
    </FetchMoreButtonWrapper>
  );
};

export default FetchMoreButton;
