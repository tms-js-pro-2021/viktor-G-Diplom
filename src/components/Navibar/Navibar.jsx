/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
  a,
  .navbar-brand,
  .nav-link {
    color: #000000;
    text-decoration: none;
    &:hover {
      color: brown;
      text-decoration: underline;
    }
  }
`;

export default function Navibar() {
  return (
    <div>
      <Styles>
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img
                  src="/images/logo3.png"
                  width="180"
                  height="77"
                  className="d-inline-block align-top"
                  alt=""
                ></img>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Container>
                <Nav className="me-auto" style={{ justifyContent: 'center' }}>
                  <Nav.Link>
                    <Link to="https://remplanner.ru/">Rem Planer</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/teachers">interior design</Link>
                  </Nav.Link>
                  <Nav.Link>
                    
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/contacts">Contacts</Link>
                  </Nav.Link>
                </Nav>
              </Container>
              <Nav>
                <Nav.Link>
                  <Link to="/login">login</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </div>
  );
}
