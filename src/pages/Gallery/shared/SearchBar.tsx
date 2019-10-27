import React from 'react';
import styled from 'styled-components';

import { heightScreen } from '../../../utils/dimension';

const SearchBarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${(heightScreen * 15) / 100}px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input.attrs<any, any>({
  placeholder: 'Start Searching For Images!',
})`
  border: none;
  width: 60%;
  font-size: 24px;
  font-weight: 500;
  padding: 1%;
  border-bottom: 1px solid #585858;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #a7a7a7;
    font-weight: 300;
  }
`;

interface SearchBarProps {
  setSearchKey: Function;
  value: string | undefined;
}

const SearchBar: React.SFC<SearchBarProps> = (props: SearchBarProps) => {
  const { setSearchKey, value } = props;

  const handleChange = (e: any) => {
    setSearchKey(e.target.value);
  };

  return (
    <SearchBarWrapper>
      <SearchInput onChange={handleChange} value={value || ''} />
    </SearchBarWrapper>
  );
};

export default SearchBar;
