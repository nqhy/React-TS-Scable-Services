import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { RouteProps } from './types';

const RoutePrivate = ({
  component: Component,
  isAuthenticated,
  to,
  layout: Layout,
  ...rest
}: RouteProps) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect
          to={{
            pathname: to,
            state: { redirect: props.location.pathname, isAuthenticated },
          }}
        />
      )
    }
  />
);

RoutePrivate.defaultProps = {
  to: '/',
};

export default RoutePrivate;
