import React from 'react';
import { render } from 'react-dom';
import {  applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './App.jsx';
import reducer from './reducers';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
  reducer,
  applyMiddleware(logger));

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>  
  </BrowserRouter>,
  document.getElementById('root')

)