import React from "react";
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';

 const Jumbotron   = () => (
  <Jumbo fluid className="jumbo">
    <div className="overlay"></div>
    <Container>
    <h1>Create new Block</h1>
    <p>Practicing your comprehension of written 
    English will both improve your vocabulary and
     understanding of grammar and word order.</p>
    </Container>
  </Jumbo>
)



export default Jumbotron ;