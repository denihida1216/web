import React from 'react';
import ScrollToTop from "react-scroll-up";
import * as Icon from 'react-bootstrap-icons';
import {
  HashRouter,
  Route,
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import About from "./About";
import Portofolio from "./Portofolio";
import Blog from "./Blog";
import logo from './img/favicon.ico';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      expanded:false,
    };
  }
  render() {
    return (
        <div className="row">
          <div className="col-md-12">
            <HashRouter>
            <div className="header">
              <Navbar expanded={this.state.expanded} bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="/">
                  <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"/>{' '}
                  Deni Hidayat
                </Navbar.Brand>
                <Navbar.Toggle onClick={() => this.state.expanded? this.setState({expanded:false}): this.setState({expanded:true})} aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#about" onClick={() =>  this.setState({expanded:false})}>About</Nav.Link>
                    <Nav.Link href="#portofolio" onClick={() =>  this.setState({expanded:false})}>Portofolio</Nav.Link>
                    <Nav.Link href="#blog" onClick={() =>  this.setState({expanded:false})}>Blog</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              </div>
              <div className="content" style={{paddingTop:"70px",}}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/portofolio" component={Portofolio} />
                <Route path="/blog" component={Blog} />
              </div>
              <div className="footer">
              
              </div>
              <ScrollToTop showUnder={160}>
                <Icon.ChevronUp color="white" style={{ backgroundColor: "black", opacity: 0.4 }} size={40} />
              </ScrollToTop>
            </HashRouter>
          </div>
        </div>
      // <Router>
      //     <h1 className="title">Deni Hidayat</h1>
      //     <Navbar bg="light" variant="light">
      //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      //       <Nav className="mr-auto">
      //         <Nav.Link href="#home">Home</Nav.Link>
      //         <Nav.Link href="#features">Features</Nav.Link>
      //         <Nav.Link href="#pricing">Pricing</Nav.Link>
      //       </Nav>
      //     </Navbar>
      //     <ul className="header">
      //       <li><NavLink to="/" replace>Blog</NavLink></li>
      //       <li><NavLink to="/about" replace>About</NavLink></li>
      //       <li><NavLink to="/portofolio" replace>Portofolio</NavLink></li>
      //     </ul>
      //     <div className="content">
      //       <Route exact path="/" component={Home}/>
      //       <Route path="/about" component={About}/>
      //       <Route path="/portofolio" component={Portofolio}/>
      //     </div>
      //     <ul className="footer">
      //     </ul>
      // <ScrollToTop showUnder={160}>
      //   <Icon.ChevronUp color="white" style={{backgroundColor: "black", opacity: 0.3}} size={40} />
      // </ScrollToTop>
      // </Router>
    );
  }
}

export default Main;