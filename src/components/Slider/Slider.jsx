/* eslint-disable import/no-unresolved */
import React from 'react';
import { Carousel, Button, Card } from 'react-bootstrap';

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="548px"
          src="images/pixel.jpeg"
          alt="pixel"
        />
        <Carousel.Caption>
          <h2>Minimalizm</h2>
          <p>
          Minimalizm — In visual arts, music, and other media, 
           War II Western art, most strongly with American visual arts 
          </p>
          <Button variant="outline-light">
            <Card.Link
              href="/about"
              style={{ color: '#FFFFFF', textDecoration: 'none' }}
            >
              Lern more
            </Card.Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="548px"
          src="images/pixel2.jpeg"
          alt="pixel2"
        />
        <Carousel.Caption>
          <h2>Barocco</h2>
          <p>
          Barocco — In visual arts, music, and other media, 
           War II Western art, most strongly with American visual arts 
          </p>
          <Button variant="outline-light">
            <Card.Link
              href="/about"
              style={{ color: '#FFFFFF', textDecoration: 'none' }}
            >
              Lern more
            </Card.Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="548px"
          src="images/pixel3.jpeg"
          alt="pixel3"
        />
        <Carousel.Caption>
          <h2>Loft</h2>
          <p>
          Loft — In visual arts, music, and other media, 
           War II Western art, most strongly with American visual arts 
          </p>
          <Button variant="outline-light">
            <Card.Link
              href="/about"
              style={{ color: '#FFFFFF', textDecoration: 'none' }}
            >
              Lern more
            </Card.Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
