import React, { FC } from "react";
import Temp from "./Charts/Temp";
import RH from "./Charts/RH";
import Dewpoint from "./Charts/Dewpoint";

const Body: FC = () => {
  return (
    <div className="app-body col-12">
      <div className="container-fluid">
        <div className="row">
          <div>
            <h1>other - Conserv.io has Facility, Sensor, Range, etc dropdowns</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Temp />
            <Dewpoint />
            <RH />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
