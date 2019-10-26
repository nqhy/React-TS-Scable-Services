import * as React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  background: #ffffff;
`;

const Content = styled.div`
  overflow: scroll;
  height: 100vh;
`;

const MainLayout = (props: any) => {
  const { children } = props;
  return (
    <Wrap>
      <Content>{children}</Content>
    </Wrap>
  );
};

export default MainLayout;
