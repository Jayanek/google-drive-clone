import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
  return (
    <>
      <Navbar bg="light" expanded="sm">
        <Navbar.Brand as={Link} to="/">
          Brand link
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/user">
            Profile
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBarComponent;
