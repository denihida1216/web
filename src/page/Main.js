import React, { Component } from "react";
import ScrollToTop from "react-scroll-up";
import * as Icon from 'react-bootstrap-icons';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portofolio from "./Portofolio";
class Main extends Component {
  render() {
    return (
      <HashRouter>
          <h1 className="title">Deni Hidayat</h1>
          <ul className="header">
            <li><NavLink to="/" replace>Blog</NavLink></li>
            <li><NavLink to="/about" replace>About</NavLink></li>
            <li><NavLink to="/portofolio" replace>Portofolio</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/portofolio" component={Portofolio}/>
          </div>
          <ul className="footer">
          </ul>
          <ScrollToTop showUnder={160}>
            <Icon.ChevronUp color="white" style={{backgroundColor: "black", opacity: 0.3}} size={40} />
          </ScrollToTop>
      </HashRouter>
    );
  }
}
 
export default Main;