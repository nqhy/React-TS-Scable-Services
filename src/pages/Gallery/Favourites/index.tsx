import React from 'react';
import styled, { css } from 'styled-components';

import useContainer from './container';
import { Gallery } from '../shared';

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
  const { data } = useContainer();

  return (
    <Wrapper isDisplay={isDisplay}>
      <Gallery data={data} />
    </Wrapper>
  );
};

export default Sample;
