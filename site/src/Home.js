/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */

import { Grid } from '@material-ui/core';
import { grid } from '@material-ui/system';
import React from 'react';
import { Container, Row, Col, Card, Button, } from 'react-bootstrap';
import Slider from './Components/Slider';
import skala from './skala.jpg';
import skalab from './skalab.jpg';


export const Home = () => (
    <>
    <Slider/>
    <Container style={{paddingTop:'8rem',paddingBottom:'5rem', padding:'30px'}}>
        <Row style={{grid:'30px'}}>
            <Col style={{color:'black'}}>
            <Card style={{width:'20rem'}}> 
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
            <Col style={{color:'black'}}>
            <Card style={{width:'20rem'}}> 
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
            <Card style={{width:'20rem'}}> 
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
            <Card style={{width:'20rem',marginTop:'40px'}}> 
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
            <Col style={{color:'black',}}>
            <Card style={{width:'20rem',marginTop:'40px'}}> 
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
            <Col style={{color:'black'}}>
            <Card style={{width:'20rem',marginTop:'40px'}}> 
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
    <Container style={{marginBottom:'30px',background:'white'}}>
        <Col md={7}>
           <img src={skalab} height={800}  />
           <h1>My new site</h1>
           
        </Col>
    <p style={{fontSize:'50px',}}>
           the texts, articles and conversations are brief and 
                       appropriate to your level of proficiency. Take the 
                       multiple-choice quiz following each text, and you'll 
                       get the resultsthe texts, articles and conversations are brief and 
                       appropriate to your level of proficiency. Take the 
                       multiple-choice quiz following each text, and you'll 
                       get the results
           </p>
        <Col md={5}>
           
           
        </Col>
    </Container>
    
    </>
)
