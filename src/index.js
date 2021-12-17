import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import browserHistory from "./browser-history";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={browserHistory}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

