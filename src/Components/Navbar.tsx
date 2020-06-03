import React, { FC } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Header from "./Header";

const Navi: FC = () => {
  return (
    <nav className="navbar-expand-lg navbar-white sticky-top">
      <Navbar bg="light">
        <Navbar.Brand href="https://start.conserv.io/">
          <img
            src="https://www.conserv.io/hs-fs/hubfs/Conserv%20Half.png?width=300&name=Conserv%20Half.png"
            width="300px"
            alt="Conserv.io Logo"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Nav className="ml-auto">
        <Nav.Link href="/home">Settings</Nav.Link>
          <Nav.Link href="https://support.conserv.io/knowledge/scoring-and-standards">Help Center</Nav.Link>
          <Nav.Link href="/home">Log Out</Nav.Link>
        </Nav>
      </Navbar>
      <Header />
    </nav>
  );
};

export default Navi;
