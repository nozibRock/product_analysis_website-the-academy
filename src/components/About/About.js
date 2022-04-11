import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./About.css";

const About = () => {
    return (
      <div>
        <Container fluid>
          <Row className="aboutUs">
            <Container>
              <Row>
                <Col
                  sm={12}
                  md={4}
                  className="d-flex flex-column bg-dark text-white p-3"
                >
                  <h1 className="font-bold text-3xl my-5">
                    Rayhans Group Corporation
                  </h1>
                  <Button className="w-50" variant="outline-info">
                    Get to know us
                  </Button>
                </Col>
                <Col sm={12} md={8}></Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
    );
};

export default About;