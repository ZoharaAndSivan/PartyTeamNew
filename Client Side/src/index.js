import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import reducer from './reduces/index';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';

const logger = createLogger();
const middleware = composeWithDevTools(applyMiddleware(logger, thunk));
const store =  createStore(reducer, middleware);
// var app = require('app')
// var cors = require('cors')
// app.use(cors());
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer,  composeEnhancers(
//  applyMiddleware(thunk)
// ));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Provider store={store}>
      <App />
      </Provider>
     </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();