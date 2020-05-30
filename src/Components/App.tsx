import React, { FC } from "react"; //need to add Component if converting to class based component
import Navi from "./Navbar";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const App: FC = () => {
  return (
    <div className="app">
      <Navi />
      <h1>butt</h1>
        <h1>butt</h1>
        <h1>butt</h1>
        <h1>butt</h1>
        <h1>butt</h1>
        <h1>butt</h1>
      <Header />
      <Body />
      <h1>butt</h1>
        <h1>butt</h1>
        <h1>butt</h1>
        <h1>butt</h1>
        <h1>butt</h1>
        <h1>butt</h1>
      <Footer />
    </div>
  );
};

export default App;
