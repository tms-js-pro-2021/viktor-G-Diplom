/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { api, fetchUtil } from '../../services/api';
import './HomePage.css';
import Slider from '../Slider/Slider';
import { Opacity, OpenInBrowser, Title } from '@material-ui/icons';
import Dialog from './dialog';

export default function HomePage() {
  const [yogaEvents, setYogaEvents] = useState([]);
  const [singleEvent, setSingleEvent] = useState({
    id: '',
    teacher: '',
    title: '',
    startDateTime: '',
    endDateTime: '',
    description: '',
  });
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [isDialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  const toTimeStamp = (eventTime) => new Date(eventTime).getTime();
  useEffect(() => {
    try {
      fetchUtil(api.yogaEvents, 'GET')
        .then((res) => res.json())
        .then((data) => {
          const sortedEvents = data.sort((a, b) =>
            toTimeStamp(a.startDateTime) > toTimeStamp(b.startDateTime) ? 1 : -1
          );
          console.log(sortedEvents);
          const [firstEvent] = sortedEvents;
          setYogaEvents(sortedEvents);
          setSingleEvent(firstEvent);
        });
    } catch (error) {
      console.log('SERVER ERROR');
    }
  }, []);

  const onEventClick = ({ target: { dataset } }) => {
    const [clickedElement] = yogaEvents.filter((el) => el.id === dataset.id);
    setSingleEvent(clickedElement);
    console.log(clickedElement);
  };

  return (
    <>
      <Slider />
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '2rem',
          paddingBottom: '3rem',
          color: '#0f0f0f',
        }}
      >
        <h1 style={{ fontWeight: 'bold' }}>Disijn Mentors</h1>
      </Container>
      <Container
        fluid
        className="background-half-gray"
        style={{
          paddingBottom: '0rem',

          sm: 'background-gray',
        }}
      >
        <Container>
          <Row>
            <Col sm={4}>
              <Card
                className="text-center"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#131212',
                }}
              >
                <Card.Img variant="top" src="/images/dis.jpg" />
                <Card.Body>
                  <Card.Title>David Pincher</Card.Title>
                  <Card.Text>Disijn creater</Card.Text>
                  <Button variant="outline-light">
                    <Card.Link
                      href="/teachers"
                      style={{ color: '#0c0b0b', textDecoration: 'none' }}
                    >
                      More
                    </Card.Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card
                className="text-center"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#131111',
                }}
              >
                <Card.Img variant="top" src="/images/dis2.jpg" />
                <Card.Body>
                  <Card.Title>Philip Moris</Card.Title>
                  <Card.Text>Disijn SEO</Card.Text>
                  <Button variant="outline-light">
                    <Card.Link
                      href="/teachers"
                      style={{ color: '#0f0f0f', textDecoration: 'none' }}
                    >
                      More
                    </Card.Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card
                className="text-center"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#0e0d0d',
                }}
              >
                <Card.Img variant="top" src="/images/dis3.jpg" />
                <Card.Body>
                  <Card.Title>Bake boldts</Card.Title>
                  <Card.Text>disijn ets</Card.Text>
                  <Button variant="outline-light">
                    <Card.Link
                      href="/teachers"
                      style={{ color: '#111010', textDecoration: 'none' }}
                    >
                      More
                    </Card.Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container
        fluid
        style={{
          marginTop: '0.rem',
          paddingTop: '44rem',
          paddingBottom: '8rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          backgroundImage: 'url(' + 'images/break.jpg' + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1
          style={{
            fontWeight: 'bold',
            fontSize: '150px',
            marginTop: '-700px',
            color: '#9b955f',
          }}
        >
          Create your own unique interior design{' '}
        </h1>

        <Button
          onClick={openDialog}
          style={{
            fontWeight: 'bold',
            position: 'absolute',
            marginTop: '350px',
            marginLeft: '810px',
            width: '170px',
          }}
        >
          Coll me
        </Button>
      </Container>

      <Container
        fluid
        style={{
          paddingTop: '5.4rem',
          paddingBottom: '7rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          backgroundImage: 'url(' + 'images/res.jpg' + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Row>
          <Col xs={12} md={6} xl={4}>
            <Card
              className="text-center"
              style={{
                paddingTop: '4.5rem',
                paddingBottom: '5rem',
                paddingLeft: '2rem',
                paddingRight: '1rem',
                background: 'rgba(152, 163, 161, 0.8)',
                color: '#FFFFFF',
              }}
            >
              <Card.Body>
                <Card.Text>
                  <p>
                    Contacts
                    <br />
                    Location:
                    <br />
                    Times Square West;
                    <br />
                    76
                  </p>
                  <p>
                    Open:
                    <br />
                    Mon. - Fri.: 7:00 – 22:00,
                    <br />
                    Sat.: 8:00 – 19:00,
                    <br />
                    Sun.: 9:00 – 19:00.
                    <br />
                  </p>
                  <p>
                    Email:
                    <br />
                    info@shaderoom.com
                  </p>
                  <p>
                    Тел. / Tel. (A1):
                    <br />
                    +897 (987) 1379-3003-313
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Dialog isOpen={isDialogOpen} onRequestClose={closeDialog} />
    </>
  );
}
