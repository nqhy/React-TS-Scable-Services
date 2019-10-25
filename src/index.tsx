import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import App from './App';
import Loader from './components/Loader';
import { store, persistor } from './redux/store';

export const app = {
  run() {
    this.render(App);
  },

  render(Component: any) {
    const root = document.getElementById('app');
    if (root) {
      ReactDOM.render(
        <Provider store={store}>
          <PersistGate
            loading={<Loader size={100} block />}
            persistor={persistor}>
            <Component />
          </PersistGate>
        </Provider>,
        root,
      );
    }
  },
};

app.run();
