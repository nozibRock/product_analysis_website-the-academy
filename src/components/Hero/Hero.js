import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
    return (
      <div>
        <Container className="top-banner p-5">
          <Row>
            <Col
              sm={12}
              md={5}
              className="d-flex flex-column bg-light p-3"
            >
              <h4>WH-1000XM4 </h4>
              <h1>Smart listening technology to enhance your listening</h1>
              <p className="my-3 fs-4 common-txt">
                The WH-1000XM4 headphones use an array of smart technologies to
                create a seamless, hands-free listening experience.
              </p>
              <div className="mt-3"></div>
            </Col>
            <Col sm={12} md={7}></Col>
          </Row>
        </Container>
      </div>
    );
};

export default Hero;