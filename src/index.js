import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./styles.css";
import App from "./components/app";
import Reducers from "./reducers";

function Index() {
  return (
    <Provider store={createStore(Reducers)}>
      <App />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
