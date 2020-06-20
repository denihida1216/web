import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portofolio from "./Portofolio";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
          <h1 className="title">Blog Deni Hidayat</h1>
          <ul className="header">
            <li><NavLink to="/" replace>Home</NavLink></li>
            <li><NavLink to="/about" replace>About</NavLink></li>
            <li><NavLink to="/portofolio" replace>Portofolio</NavLink></li>
            <li><NavLink to="/contact" replace>Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/portofolio" component={Portofolio}/>
            <Route path="/contact" component={Contact}/>
          </div>
          <ul className="footer">
          </ul>
      </HashRouter>
    );
  }
}
 
export default Main;