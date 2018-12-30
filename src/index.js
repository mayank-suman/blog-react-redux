import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import "./styles.css";
import App from "./components/app";
import Reducers from "./reducers";

function Index() {
  const store = createStore(Reducers, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
