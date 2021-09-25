/* eslint-disable no-unused-vars */

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Jumb from './Components/Jumb';
import Slider from './Components/Slider';
import skala from './skala.jpg';

export const Home = () => (
    <>
    <Slider/>
    <Container style={{paddingTop:'5rem',paddingBottom:'5rem'}}>
        <Row>
            <Col style={{color:'black'}}>
            <Card style={{width:'18rem'}}> 
               <Card.Img variant="top" src={skala}/>
               <Card.Body>
                   <Card.Title>My make Card</Card.Title>
                   <Card.Text>Prepared by experienced English teachers, 
                       the texts, articles and conversations are brief and 
                       appropriate to your level of proficiency. Take the 
                       multiple-choice quiz following each text, and you'll 
                       get the results
                   </Card.Text>
                   <Button variant="primary">Learn more</Button>
               </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{width:'18rem'}}> 
               <Card.Img variant="top" src={skala}/>
               <Card.Body>
                   <Card.Title>My make Card</Card.Title>
                   <Card.Text>Prepared by experienced English teachers, 
                       the texts, articles and conversations are brief and 
                       appropriate to your level of proficiency. Take the 
                       multiple-choice quiz following each text, and you'll 
                       get the results
                   </Card.Text>
                   <Button variant="primary">Learn more</Button>
               </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{width:'18rem'}}> 
               <Card.Img variant="top" src={skala}/>
               <Card.Body>
                   <Card.Title>My make Card</Card.Title>
                   <Card.Text>Prepared by experienced English teachers, 
                       the texts, articles and conversations are brief and 
                       appropriate to your level of proficiency. Take the 
                       multiple-choice quiz following each text, and you'll 
                       get the results
                   </Card.Text>
                   <Button variant="primary">Learn more</Button>
               </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
    <Jumb />
    </>
)
