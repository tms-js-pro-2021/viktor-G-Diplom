/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Carousel } from 'react-bootstrap';
import ocen from '../ocen.jpg';
import skala from '../skala.jpg';
import skalab from '../skalab.jpg';


export default function Slider() {

    return (
    <Carousel>
        <Carousel.Item style={{'height': '600px'}}>
           <img
            className="d-block w-100"
            src={ocen}
            alt="First slide"
           />
           <Carousel.Caption>
               <h3>Make your Desijn</h3>
               <p>Create your new site</p>
           </Carousel.Caption>
           
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}} >
           <img
            className="d-block w-100"
            src={skala}
            alt="First slide"
           />
           <Carousel.Caption>
               <h3>Make your Desijn</h3>
               <p>Create your new site</p>
           </Carousel.Caption>
           
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}} >
           <img
            className="d-block w-100"
            src={skalab}
            alt="First slide"
           />
           <Carousel.Caption>
               <h3>Make your Desijn</h3>
               <p>Create your new site</p>
           </Carousel.Caption>
           
           
        </Carousel.Item>
        
        <Carousel.Item style={{'height': '600px'}} >
           <img
            className="d-block w-100"
            src={skalab}
            alt="First slide"
           />
           <Carousel.Caption>
               <h3>Make your Desijn</h3>
               <p>Create your new site</p>
           </Carousel.Caption>
           
           
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}} >
           <img
            className="d-block w-100"
            src={skalab}
            alt="First slide"
           />
           <Carousel.Caption>
               <h3>Make your Desijn</h3>
               <p>Create your new site</p>
           </Carousel.Caption>
           
           
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}} >
           <img
            className="d-block w-100"
            src={skalab}
            alt="First slide"
           />
           <Carousel.Caption>
               <h3>Make your Desijn</h3>
               <p>Create your new site</p>
           </Carousel.Caption>
        </Carousel.Item>
        
    </Carousel>
)}