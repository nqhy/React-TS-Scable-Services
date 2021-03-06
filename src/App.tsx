import React, { Suspense, lazy } from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import theme from './utils/theme';
import history from './utils/history';
import GlobalStyles from './components/GlobalStyles';
import RoutePublic from './components/RoutePublic';
import MainLayout from './components/Layout/MainLayout';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound';

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
              <ToastContainer />
              <Switch>
                <RoutePublic
                  isAuthenticated={false}
                  path="/"
                  component={Gallery}
                  layout={MainLayout}
                />
                <RoutePublic
                  isAuthenticated={false}
                  path="/404"
                  component={NotFound}
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
