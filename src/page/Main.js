import React from 'react';
import ScrollToTop from "react-scroll-up";
import * as Icon from 'react-bootstrap-icons';
import {
  Route,
  Link,
} from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from "./Home";
import About from "./About";
import Portofolio from "./Portofolio";
import Tutorial from "./Tutorial";
import PrivacyPolicy from "./PrivacyPolicy";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
    function navClick(t) {
      t.setState({ expanded: false });
      window.scrollTo(0, 0);
    }
    return (
      <div className="row align-items-center justify-content-center">
        <div className="col-md-8 post-outer">
          <header>
            <Navbar expanded={this.state.expanded} bg="dark" variant="dark" expand="lg" fixed="top" style={{ padding: "20px", }}>
              <Link className="navbar-brand" to={'/'} onClick={() => navClick(this)}>
                <img
                  alt=""
                  src="./favicon.ico"
                  width="30"
                  height="30"
                  className="d-inline-block align-top" />{' '}
                  Deni Hidayat
                </Link>
              <Navbar.Toggle onClick={() => this.state.expanded ? this.setState({ expanded: false }) : this.setState({ expanded: true })} aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link className="nav-link" to="/" onClick={() => navClick(this)}>Home</Link>
                  <Link className="nav-link" to="/about" onClick={() => navClick(this)}>About</Link>
                  <Link className="nav-link" to="/portofolio" onClick={() => navClick(this)}>Portofolio</Link>
                  <Link className="nav-link" to="/tutorial" onClick={() => navClick(this)}>Tutorial</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>
          <Container className="themed-container card card-body p-md-5" style={{ marginTop: "70px", padding: "10px" }} onClick={() => this.setState({ expanded: false })}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portofolio" component={Portofolio} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
          </Container>
          <footer className="mb-0 mt-5 py-5" onClick={() => this.setState({ expanded: false })}>
            {/* - {(new Date().getFullYear())} */}
            <div className="text-center text-secondary">
              &copy;2020 <Link to="/" target="_blank" className="text-secondary"> Deni Hidayat</Link> &ndash; <Link to="/privacy-policy" target="_blank" className="text-secondary"> Privacy Policy</Link>
            </div>
          </footer>
          <ScrollToTop showUnder={160}>
            <Icon.ChevronUp color="white" style={{ backgroundColor: "black", opacity: 0.4 }} size={40} />
          </ScrollToTop>
        </div>
      </div>
    );
  }
}

export default Main;