import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux"; //makes sure that store is available
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise"; //to use API
import reducers from "./reducers";

import "./index.css";
import App from "./components/App/App";
const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={storeWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
