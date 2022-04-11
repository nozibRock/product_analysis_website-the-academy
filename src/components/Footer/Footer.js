import React from "react";
import { Col, Row, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="main_footer">
        <Container fluid className="p-5">
          <Row>
            <Col sm>
              <Nav className="list-unstyled footer-address">
                <Nav.Link style={{ color: "#999999" }} className="mb-3">
                  {" "}
                  <i className="fas fa-envelope"></i> Official:{" "}
                  <a
                    href="mailto:nozibuddowla@gmail.com"
                    className="link text-decoration-none"
                  >
                    nozibuddowla@gmail.com
                  </a>{" "}
                </Nav.Link>
                <Nav.Link style={{ color: "#999999" }} className="mb-3">
                  <i className="fas fa-map-marker-alt"></i> Road 21, Block B
                  Kemal Ataturk Avenue, Dhaka{" "}
                </Nav.Link>
                <Nav.Link style={{ color: "#999999" }} className="mb-3">
                  <i className="fas fa-phone-alt"></i> Helpline:{" "}
                  <a
                    href="tel:01922438860"
                    className="link text-decoration-none"
                  >
                    01922438860{" "}
                  </a>
                </Nav.Link>
              </Nav>
            </Col>
            <Col sm>
              <h4 className="mb-4 text-white text-capitalize">Useful Links</h4>
              <Nav className="list-unstyled d-flex flex-column justify-content-center align-items-start my-4 my-md-0">
                <Link to={"/about"} className="link">
                  <i className="fas fa-angle-right"></i> About
                </Link>
                <Link to={"/refund-policy"} className="link">
                  <i className="fas fa-angle-right"></i> Refund policy
                </Link>
                <Link to={"/reviews"} className="link">
                  <i className="fas fa-angle-right"></i> Reviews
                </Link>
                <Link to={"/terms-of-service"} className="link">
                  <i className="fas fa-angle-right"></i> Terms and Conditions
                </Link>
                <Link to={"/privacy"} className="link">
                  <i className="fas fa-angle-right"></i> Privacy Policy
                </Link>
              </Nav>
            </Col>

            <Col sm>
              <h4 className="text-white text-center">Follow us</h4>
              <div className="social">
                <ul className="list-unstyled d-flex flex-wrap justify-content-between align-items-center px-5">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      style={{ fontSize: "24px" }}
                      className="link"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      style={{ fontSize: "24px" }}
                      className="link"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      style={{ fontSize: "24px" }}
                      className="link"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/"
                      style={{ fontSize: "24px" }}
                      className="link"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyright">
        <Container>
          <Row>
            <Col sm>
              <div className="d-flex justify-content-center align-items-center p-3">
                <p>
                  {" "}
                  Copyright &copy; {new Date().getFullYear()}{" "}
                  <Link
                    to={"/home"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    <strong className="mb-4">
                      Rayhans{" "}
                      <span className="fw-bold" style={{ color: "#565387" }}>
                        Computers
                      </span>
                    </strong>{" "}
                  </Link>{" "}
                  | All rights reserved | Terms Of Service | Privacy
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
