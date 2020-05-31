import React, { FC } from "react";
import Temp from "./Temp";
import RH from "./RH";

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
            <h1>Body Placeholder</h1>
            <Temp />
            <RH />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
