import React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  //assigning location variable
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <div>
      <Container fluid>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <NavbarBrand as={Link} to={"/"}>
              Rayhans <span className="fw-bold brand">Computers</span>
            </NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link
                  as={Link}
                  to={"/"}
                  className={splitLocation[1] === "home" ? "active" : ""}
                >
                  {" "}
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/reviews"}
                  className={splitLocation[1] === "reviews" ? "active" : ""}
                >
                  {" "}
                  Reviews
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/dashboard"}
                  className={splitLocation[1] === "dashboard" ? "active" : ""}
                >
                  {" "}
                  Dashboard
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/blogs"}
                  className={splitLocation[1] === "blogs" ? "active" : ""}
                >
                  {" "}
                  Blogs
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={"/about"}
                  className={splitLocation[1] === "about" ? "active" : ""}
                >
                  {" "}
                  About
                </Nav.Link>
              </Nav>
              <Link to={"/login"} style={{ textDecoration: "none" }}>
                <div className="user">
                  <i className="fas fa-user-circle"></i>
                </div>
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
