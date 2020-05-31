import React, { FC } from "react"; //need to add Component if converting to class based component
import Navi from "./Navbar";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const App: FC = () => {
  return (
    <div className="app">
      <Navi />
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
