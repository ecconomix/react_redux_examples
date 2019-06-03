import React from 'react';
import { render } from 'react-dom';
import {  applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './App.jsx';
import Navigation from 'components/Navigation/Navigation';
import Counter from 'containers/CounterContainers/Counter';
import reducer from './reducers';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/main.css';

const store = createStore(
  reducer,
  applyMiddleware(logger));

render(
  <BrowserRouter>
    <Provider store={store}>
      <BrowserRouter>
       <Navigation />
        <Route exact path="/" component={App} />
        <Route path="/counter" component={Counter} />
      </BrowserRouter>
    </Provider>  
  </BrowserRouter>,
  document.getElementById('root')
)
