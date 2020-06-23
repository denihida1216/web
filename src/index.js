import React from "react";
import ReactDOM from "react-dom";
import Main from "./page/Main";
import "./style.css";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL+'/'}>
    <Main />
  </Router>, document.getElementById('root'));

serviceWorker.register();