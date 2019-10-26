import React from 'react';
import styled, { css } from 'styled-components';

import { FunctionsName } from '../types';

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  padding-bottom: 1%;
  border-bottom: 1px solid black;
  padding-left: 10%;
`;

const TitleWrapper = styled.div`
  flex: 0.1 1 0;
  margin-right: 2%;
`;

const NormalTitle = styled.span`
  color: #a7a7a7;
  font-size: 20px;
`;

const BoldTitle = styled(NormalTitle)`
  color: #585858;
  font-weight: 700;
`;

const Divider = styled.div`
  flex: 0.0017 1 0;
  background: #585858;
  margin-right: 5%;
`;

const SelectionWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Selection = styled(NormalTitle)<{ isSelected?: boolean }>`
  font-size: 20px;
  margin-right: 5%;
  cursor: pointer;
  ${({ isSelected }) =>
    isSelected &&
    css`
      color: #585858;
      font-weight: 700;
    `}
`;

interface HeaderProps {
  selectedFunc: FunctionsName;
  onHandleSelect: Function;
}

const Header: React.SFC<HeaderProps> = (props: HeaderProps) => {
  const { selectedFunc, onHandleSelect } = props;

  const handleSelectFunc = (value: FunctionsName) => {
    onHandleSelect(value);
  };
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <NormalTitle>Galler</NormalTitle>
        <BoldTitle>easy</BoldTitle>
      </TitleWrapper>
      <Divider />
      <SelectionWrapper>
        <Selection
          isSelected={selectedFunc === 'search'}
          onClick={() => handleSelectFunc('search')}>
          Search
        </Selection>
        <Selection
          isSelected={selectedFunc === 'favourites'}
          onClick={() => handleSelectFunc('favourites')}>
          Favourites (1)
        </Selection>
      </SelectionWrapper>
    </HeaderWrapper>
  );
};

export default Header;
