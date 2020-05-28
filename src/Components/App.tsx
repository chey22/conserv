import React, { FC, Fragment, Component } from "react"; //need to add Component if converting to class based component
import Navvy from "./Navbar";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const App: FC = () => {
  return (
    <div className="app">
      <Navvy />
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
