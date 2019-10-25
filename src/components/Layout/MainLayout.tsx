import * as React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  background: #fafafa;
`;

const Body = styled.div`
  display: flex;
`;
const Content = styled.div`
  flex: 1;
  margin-left: 30px;
`;

const MainLayout = (props: any) => {
  const { children } = props;
  return (
    <Wrap>
      <Body>
        <Content>{children}</Content>
      </Body>
    </Wrap>
  );
};

export default MainLayout;
