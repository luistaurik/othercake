import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function NavbarComponent() {

    return (
          <Navbar expand="lg" className="bg-danger">
            <Container>
              <Navbar.Brand href="/" className="text-light" >Other Cake</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto text-light">
                  <Link className="text-light nav-link"  to="/">Home</Link>
                  <Link className="text-light nav-link" to="/contact">Contacto</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    )
  }
  
  export default NavbarComponent;