import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import * as reducers from './reducers';

let todoApp = combineReducers(reducers);
let store = createStore(todoApp);

let rootElement = document.getElementById('root');
React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  rootElement
);
