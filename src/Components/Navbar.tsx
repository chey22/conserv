import React, { FC } from "react";
import { Navbar, Nav } from "react-bootstrap";

//interface NavbarProps extends RouteComponentProps { };

const Navi: FC = () => {
  return (
    <nav className="navbar-expand-md navbar-white sticky-top">
      <Navbar bg="white">
        <Navbar.Brand href="#home">
          <img
            src="assets/Conserv500.png"
            width="300px"
            alt="Conserv.io Logo"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Nav className="ml-auto">Account</Nav>
      </Navbar>
    </nav>
  );
};

export default Navi;
