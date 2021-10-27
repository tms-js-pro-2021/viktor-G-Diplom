/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React from "react";
import loft2 from "./loft2.jpg";
import loft from "./loft.jpg";
import { Container, Col, Card, Button } from "react-bootstrap";
import dis5 from "./dis5.jpg";
import styled from "styled-components";


export const Users = () => (
  <Container>
    
    <Container
      style={{ marginBottom: "50px", background: "white", padding: "20px" }}
    >
      <Col md={7}>
        <img src={loft} height={712} />
        <h1 style={{ fontSize: "150px" }}>Loft style</h1>
      </Col>
      <p style={{ fontSize: "50px" }}>
        A loft is a building's upper storey or elevated area in a room directly
        under the roof (American usage), or just an attic: a storage space under
        the roof usually accessed by a ladder (primarily British usage). A loft
        apartment refers to large adaptable open space, often converted for
        residential use (a converted loft) from some other use, often light
        industrial. Adding to the confusion, some converted lofts include upper
        open loft areas.
      </p>
      <Col md={5}></Col>
    </Container>

    <Card className="bg-dark text-white">
      <Card.Img src={loft2} alt="loft2" />
      <Card.ImgOverlay>
        <Card.Title>Loft Disijen</Card.Title>
        <Card.Text>
          ent refers to large adaptable open space, often converted for
          residential use (a converted loft) from some other use, often light
          industrial. Adding to the confusion, some converted lofts inclu
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>

    <Card.Body style={{ display: "flex",flexWrap:"wrap" }}>
      <Col style={{ color: "black" }}>
        <Card style={{ width: "20rem", marginTop: "40px" }}>
          <Card.Img variant="top" src={dis5} />
          <Card.Body>
            <Card.Title>My make Card</Card.Title>
            <Card.Text>
              Prepared by experienced English teachers, the texts, articles and
              conversations are brief and appropriate to your level of
              proficiency. Take the multiple-choice quiz following each text,
              and you'll get the results
            </Card.Text>
            <Button variant="primary">Learn more</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col style={{ color: "black" }}>
        <Card style={{ width: "20rem", marginTop: "40px" }}>
          <Card.Img variant="top" src={dis5} />
          <Card.Body>
            <Card.Title>My make Card</Card.Title>
            <Card.Text>
              Prepared by experienced English teachers, the texts, articles and
              conversations are brief and appropriate to your level of
              proficiency. Take the multiple-choice quiz following each text,
              and you'll get the results
            </Card.Text>
            <Button variant="primary">Learn more</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col style={{ color: "black" }}>
        <Card style={{ width: "20rem", marginTop: "40px" }}>
          <Card.Img variant="top" src={dis5} />
          <Card.Body>
            <Card.Title>My make Card</Card.Title>
            <Card.Text>
              Prepared by experienced English teachers, the texts, articles and
              conversations are brief and appropriate to your level of
              proficiency. Take the multiple-choice quiz following each text,
              and you'll get the results
            </Card.Text>
            <Button variant="primary">Learn more</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col style={{ color: "black" }}>
        <Card style={{ width: "20rem", marginTop: "40px" }}>
          <Card.Img variant="top" src={dis5} />
          <Card.Body>
            <Card.Title>My make Card</Card.Title>
            <Card.Text>
              Prepared by experienced English teachers, the texts, articles and
              conversations are brief and appropriate to your level of
              proficiency. Take the multiple-choice quiz following each text,
              and you'll get the results
            </Card.Text>
            <Button variant="primary">Learn more</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col style={{ color: "black" }}>
        <Card style={{ width: "20rem", marginTop: "40px" }}>
          <Card.Img variant="top" src={dis5} />
          <Card.Body>
            <Card.Title>My make Card</Card.Title>
            <Card.Text>
              Prepared by experienced English teachers, the texts, articles and
              conversations are brief and appropriate to your level of
              proficiency. Take the multiple-choice quiz following each text,
              and you'll get the results
            </Card.Text>
            <Button variant="primary">Learn more</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col style={{ color: "black" }}>
        <Card style={{ width: "20rem", marginTop: "40px" }}>
          <Card.Img variant="top" src={dis5} />
          <Card.Body>
            <Card.Title>My make Card</Card.Title>
            <Card.Text>
              Prepared by experienced English teachers, the texts, articles and
              conversations are brief and appropriate to your level of
              proficiency. Take the multiple-choice quiz following each text,
              and you'll get the results
            </Card.Text>
            <Button variant="primary">Learn more</Button>
          </Card.Body>
        </Card>
      </Col>
    </Card.Body>

  </Container>
  
);
