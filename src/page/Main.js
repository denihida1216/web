import React from 'react';
import ScrollToTop from "react-scroll-up";
import * as Icon from 'react-bootstrap-icons';
import {
  Route,
  Link,
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import About from "./About";
import Portofolio from "./Portofolio";
import Blog from "./Blog";
import PrivacyPolicy from "./PrivacyPolicy";
import logo from './img/favicon.ico';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
            <div className="header">
              <Navbar expanded={this.state.expanded} bg="dark" variant="dark" expand="lg" fixed="top" style={{ padding: "20px", }}>
                <Link className="navbar-brand" to="/">
                  <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top" />{' '}
                  Deni Hidayat
                </Link>
                <Navbar.Toggle onClick={() => this.state.expanded ? this.setState({ expanded: false }) : this.setState({ expanded: true })} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Link className="nav-link" to="/about" onClick={() => this.setState({ expanded: false })}>About</Link>
                    <Link className="nav-link" to="/portofolio" onClick={() => this.setState({ expanded: false })}>Portofolio</Link>
                    <Link className="nav-link" to="/blog" onClick={() => this.setState({ expanded: false })}>Blog</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
            <div className="content" style={{ paddingTop: "70px",textAlign:"justify", }}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portofolio" component={Portofolio} />
              <Route path="/blog" component={Blog} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
            </div>
            <div className="footer">
              <footer className="mt-5 mb-5" style={{backgroundColor:"#343a40!important"}}>
                <div className="text-center text-secondary">
                  &copy; {(new Date().getFullYear())} <a href="https://denihida1216.github.io" className="text-secondary"> Deni Hidayat</a> &ndash; <a href="#privacy-policy" className="text-secondary"> Privacy Policy</a>
                </div>
              </footer>
            </div>
            <ScrollToTop showUnder={160}>
              <Icon.ChevronUp color="white" style={{ backgroundColor: "black", opacity: 0.4 }} size={40} />
            </ScrollToTop>
        </div>
      </div>
    );
  }
}

export default Main;