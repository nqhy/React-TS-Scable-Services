import React, { Suspense, lazy } from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import theme from './utils/theme';
import history from './utils/history';
import GlobalStyles from './components/GlobalStyles';
import RoutePublic from './components/RoutePublic';
import MainLayout from './components/Layout/MainLayout';
import ErrorBoundary from './components/ErrorBoundary';

const Gallery = lazy(() => import('./pages/Gallery'));

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <div>
          <Helmet
            defer={false}
            encodeSpecialCharacters={true}
            defaultTitle="Gallereasy"
            titleTemplate="Gallereasy"
            titleAttributes={{ itemprop: 'name', lang: 'en-vi' }}
          />
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <RoutePublic
                  isAuthenticated={false}
                  path="/"
                  component={Gallery}
                  layout={MainLayout}
                />
              </Switch>
            </Suspense>
          </ErrorBoundary>
          <GlobalStyles />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default hot(App);
