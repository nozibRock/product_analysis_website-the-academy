import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
    return (
      <div>
        <Container className="top-banner p-5 mt-5">
          <Row>
            <Col
              sm={12}
              md={5}
              className="d-flex flex-column bg-dark text-white p-3"
            >
              <h5>WH-1000XM4 </h5>
              <h2>Smart listening technology to enhance your listening</h2>
              <p>
                The WH-1000XM4 headphones use an array of smart technologies to
                create a seamless, hands-free listening experience.
              </p>

              <Button className='w-50' variant="outline-info" size="sm">
                Learn about Headphones
              </Button>
            </Col>
            <Col sm={12} md={7}></Col>
          </Row>
        </Container>
      </div>
    );
};

export default Hero;