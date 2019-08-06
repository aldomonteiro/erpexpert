import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'gatsby';
import logo from '../images/logo.png'


const Footer = () => (
  <footer>
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">
        <img
          src={logo}
          className="d-inline-block align-top"
          alt="ERPexpert Logo"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link><Link to="/">Home</Link></Nav.Link>
        <Nav.Link><Link to="/sobre">Sobre</Link></Nav.Link>
        <Nav.Link><Link to="/contrate">Contrate</Link></Nav.Link>
      </Nav>
    </Navbar>
  </footer>
)
export default Footer
