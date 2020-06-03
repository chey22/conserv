import React, { FC } from "react";
import Temp from "./Charts/Temp";
import RH from "./Charts/RH";
import Dewpoint from "./Charts/Dewpoint";
import IR from "./Charts/IR";
import Vis from "./Charts/Vis";

const Body: FC = () => {
  return (
    <div className="app-body col-12">
      <div className="container-fluid">
        <div className="row"></div>
        <div className="row">
          <div className="col-lg-12">
            <Temp />
            <Dewpoint />
            <RH />
            <IR />
            <Vis />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
