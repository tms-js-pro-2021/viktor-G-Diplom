import React from "react";
import { Jumb as Jumbo, Container } from 'react-bootstrap';
import styled from "styled-components";
import skala from './skala.jpg';

 const Styles = styled.div`
    
    .Jumbo {
      background: url(${skala}) no-repeat fixed bottom;
      background-size: cover;
      color:#efefef;
      height:400px;
      position:relative;
      z-index: -2;
    }
 `;


 const Jumb   = () => (
   <Styles>
  <Jumbo fluid className="jumbo">
    <div className="overlay"></div>
    <Container>
    <h1>Create new Block</h1>
    <p>Practicing your comprehension of written 
    English will both improve your vocabulary and
     understanding of grammar and word order.</p>
    </Container>
  </Jumbo>
  </Styles>
)



export default Jumb ;