import React, { FC } from "react"; //need to add Component if converting to class based component
import Navi from "./Navbar";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const App: FC = () => {
  return (
    <div className="app">
      <nav className="navbar-expand-md navbar-white sticky-top">
        <Navi />
        <Header />
      </nav>
      <div className="app-body col-12">
        <div className="container-fluid">
          <div className="row">
            <div>
              <h1>other</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Body />
              <h1>other</h1>
            </div>
          </div>
        </div>
      </div>
          <Footer />
    </div>
  );
};

export default App;
