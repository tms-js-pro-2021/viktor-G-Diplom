/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Carousel } from 'react-bootstrap';
import inter from '../inter.jpg';
import inter2 from '../inter2.jpg';
import inter3 from '../inter3.jpg';
import dis4 from '../dis4.jpg';
import dis5 from '../dis5.jpg';


    export default function Slider() {

        return (
        <Carousel>
            <Carousel.Item style={{'height': '700px'}}>
            <img
                className="d-block w-100"
                src={inter}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Make your Desijn</h3>
                <p>Create your new site</p>
            </Carousel.Caption>
            
            </Carousel.Item>
            <Carousel.Item style={{'height': '700px'}} >
            <img
                className="d-block w-100"
                src={inter3}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Make your Desijn</h3>
                <p>Create your new site</p>
            </Carousel.Caption>
            
            </Carousel.Item>
            <Carousel.Item style={{'height': '700px'}} >
            <img
                className="d-block w-100"
                src={dis4}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Make your Desijn</h3>
                <p>Create your new site</p>
            </Carousel.Caption>
            
            
            </Carousel.Item>
            
            <Carousel.Item style={{'height': '700px'}} >
            <img
                className="d-block w-100"
                src={dis5}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Make your Desijn</h3>
                <p>Create your new site</p>
            </Carousel.Caption>
            
            
            </Carousel.Item>
            <Carousel.Item style={{'height': '700px'}} >
            <img
                className="d-block w-100"
                src={inter2}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Make your Desijn</h3>
                <p>Create your new site</p>
            </Carousel.Caption>
            
            
            </Carousel.Item>
            <Carousel.Item style={{'height': '700px'}} >
            <img
                className="d-block w-100"
                src={inter}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Make your Desijn</h3>
                <p>Create your new site</p>
            </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    )}