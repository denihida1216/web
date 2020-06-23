import React from "react";
import ReactDOM from "react-dom";
import Main from "./page/Main";
import "./style.css";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router basename={'/web'}>
    <Main />
  </Router>, document.getElementById('root'));

serviceWorker.register();