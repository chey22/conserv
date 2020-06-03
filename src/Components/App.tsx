import React, { FC } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Navi from "./Navbar";

const App: FC = () => {
  return (
    <div className="app">
      <Navi />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
