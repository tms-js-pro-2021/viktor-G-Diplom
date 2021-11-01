/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Navbar, Nav, Button, Container, Modal, Form  } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import LoginForm from './LoginForm/LoginForm'

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;

const LoginButtonWrapper = styled(Nav)`
  flex: 1;
  justify-content: end;
`;

export default function Navibar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);

    handleClose();
  };

  return (
    <>
      <Styles>
        <Navbar collapseOnselect expend="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>My site diplom</Navbar.Brand>
            <Navbar.Toggle aria-controls="responcive-navbar-nav" />
            <Navbar.Collapse id="responcive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/users">Users</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
              </Nav>
              <LoginButtonWrapper>
                {!isLoggedIn ? (
                  <Button
                    variant="primary"
                    className="mr-2  "
                    onClick={handleShow}
                  >
                    Log in
                  </Button>
                ) : (
                  <Button variant="primary" onClick={handleShow}>
                    Log out
                  </Button>
                )}
              </LoginButtonWrapper>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never shere your email with anyone else{" "}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
              <Button
                variant="primary"
                className="mr-2  "
                onClick={handleLogin}
              >
                Log in
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
