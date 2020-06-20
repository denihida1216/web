import React from "react";
import ReactDOM from "react-dom";
import Main from "./page/Main";
import "./style.css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>, 
  document.getElementById("root")
);

serviceWorker.register();