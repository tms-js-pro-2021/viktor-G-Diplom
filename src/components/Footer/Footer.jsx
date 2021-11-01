import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Container fluid style={{ backgroundColor: '#4D1919', color: '#E5E5E5' }}>
      <Container
        style={{
          paddingTop: '2rem',
          paddingBottom: '5rem',
          paddingLeft: '0',
          color: '#E5E5E5',
        }}
      >
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Col
            sm={4}
            style={{
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            <Link to="/">
              <img src="/images/logo3.png" width="180" height="87" alt=""></img>
            </Link>
          </Col>
          <Col sm={4}>
            <p
              style={{
                color: '#E5E5E5',
                textAlign: 'center',
              }}
            >
              © ShadeRoom
              <br />
              ShadeRooms.Companny
            </p>
          </Col>
          <Col sm={4}>
            <p
              style={{
                color: '#E5E5E5',
                textAlign: 'center',
              }}
            >
              727 Drainer Avenue
              <br />
              850-561-3556
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
