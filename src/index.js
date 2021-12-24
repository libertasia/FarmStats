import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";
import browserHistory from "./browser-history";
import {composeWithDevTools} from "redux-devtools-extension";
import App from './App';
import rootReducer from "./store/root-reducer";
import {createAPI} from "./services/api";
import {fetchAllFarms} from "./store/api-actions";

const api = createAPI();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  )
);

store.dispatch(fetchAllFarms());

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

