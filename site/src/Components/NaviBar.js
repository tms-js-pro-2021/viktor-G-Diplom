/* eslint-disable no-unused-vars */

import React from "react";
import { Navbar, Nav, Link, Button } from 'react-bootstrap';

export default function Navibar () {

    return (
    <>
       <Navbar collapseOnselect expend = "lg" bg="dark" variant="dark" >
         <Navbar.Brand>My site diplom</Navbar.Brand>
         <Navbar.Toggle aria-controls="responcive-navbar-nav" />
         <Navbar.Collapse id="responcive-navbar-nav" >
          <Nav className="mr-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>about</Nav.Link>
          </Nav>
          <Nav>
              <Button variant="primary">Log in</Button>
              <Button variant="primary">Sign out</Button>
          </Nav>
         </Navbar.Collapse>
       </Navbar>
    </>
)}