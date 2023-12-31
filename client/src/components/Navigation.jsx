import React, { useState } from "react";
import {
  Container,
  Nav,
  NavLink,
  Navbar,
  NavbarBrand,
  Offcanvas,
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";
import "../css/color.css";
import "../css/main.css";

import "../css/navigation.css";

export default function Navigation() {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const closeOffCanvas = () => {
    setShowOffCanvas(false);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" nav " sticky="top">
        <Container className="container">
          <NavbarBrand>
            <Link to={"/"}>
              <h3 className="logo">HILUX</h3>
            </Link>
          </NavbarBrand>
          <NavbarToggle
            aria-controls="offcanvas"
            onClick={() => setShowOffCanvas(!showOffCanvas)}
          />
          <Navbar.Offcanvas
            id="offcanvas"
            placement="end"
            className="off-canvas  "
            show={showOffCanvas}
            onHide={closeOffCanvas}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end ms-auto navbar">
                <NavLink
                  className="navlink"
                  as={Link}
                  to={"/"}
                  onClick={closeOffCanvas}
                >
                  Home
                </NavLink>

                <NavLink
                  className="navlink"
                  as={Link}
                  to={"/products"}
                  onClick={closeOffCanvas}
                >
                  Products
                </NavLink>
                <NavLink
                  className="navlink"
                  as={Link}
                  to={"/aboutus"}
                  onClick={closeOffCanvas}
                >
                  About Us
                </NavLink>
                <NavLink
                  className="navlink"
                  as={Link}
                  to={"/contactus"}
                  onClick={closeOffCanvas}
                >
                  Contact Us
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
