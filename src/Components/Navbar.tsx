import React, { FC } from "react";
import { Navbar, Nav } from "react-bootstrap";

//interface NavbarProps extends RouteComponentProps { };

const Navvy: FC = () => {
  return (
    <div className="navvy">
      <Navbar bg="white">
        <Navbar.Brand href="#home">
          <img
            src="assets/Conserv500.png"
            width="400px"
            alt="Conserv.io Logo"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Nav className="ml-auto">Account</Nav>
      </Navbar>
    </div>
  );
};

export default Navvy;
