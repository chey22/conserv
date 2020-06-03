import React, { FC } from "react";
import Navi from "./Navbar";
import { Button } from "react-bootstrap";

const Header: FC = () => {
  return (
    <div className="header">
      {/* <Navi /> */}
      <header className="headline">
        <span>COVID-19: Conserv has a special offer for your collection</span>
        <Button className="ml-5" variant="outline-dark" size="sm">
          Claim Offer
        </Button>
      </header>
      {/* <Card className="text-center">
            <Card.Subtitle>
            COVID-19: Conserv has a special offer for your collection
            <Button>hey</Button>
            </Card.Subtitle>
          </Card> */}
    </div>
  );
};

export default Header;
