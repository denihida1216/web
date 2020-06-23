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
    function navClick(t){
      t.setState({ expanded: false });
      window.scrollTo(0, 0);
    }
    return (
      <div className="row">
        <div className="col-md-12">
            <div className="header">
              <Navbar expanded={this.state.expanded} bg="dark" variant="dark" expand="lg" fixed="top" style={{ padding: "20px", }}>
                <Link className="navbar-brand" to="/" onClick={()=>navClick(this)}>
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
                    <Link className="nav-link" to="/about" onClick={()=>navClick(this)}>About</Link>
                    <Link className="nav-link" to="/portofolio" onClick={()=>navClick(this)}>Portofolio</Link>
                    <Link className="nav-link" to="/blog" onClick={()=>navClick(this)}>Blog</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
            <Container className="themed-container" fluid={true} style={{ paddingTop: "70px",textAlign:"justify", }} onClick={()=>this.setState({ expanded: false })}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portofolio" component={Portofolio} />
              <Route path="/blog" component={Blog} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
            </Container>
              <footer onClick={()=>this.setState({ expanded: false })}>
                <Container className="themed-container" fluid={true}>
                  <div className="text-center text-secondary">
                      &copy; {(new Date().getFullYear())} <Link to="/" target="_blank" className="text-secondary"> Deni Hidayat</Link> &ndash; <Link to="/privacy-policy" target="_blank" className="text-secondary"> Privacy Policy</Link>
                    </div>
                </Container>
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