/* eslint-disable */
import qs from 'qs';

let history: any;

if (typeof document !== 'undefined') {
  const createBrowserHistory = require('history').createBrowserHistory;

  history = createBrowserHistory();

  history.listen(() => {
    history.location = {
      ...history.location,
      query: qs.parse(history.location.search.substr(1)),
      state: history.location.state || {},
    };
  });
}

export default history;
