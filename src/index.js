import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {BrowserRouter} from "react-router-dom";
import browserHistory from "./browser-history";
import {composeWithDevTools} from "redux-devtools-extension";
import App from './App';
import rootReducer from "./store/root-reducer";

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

