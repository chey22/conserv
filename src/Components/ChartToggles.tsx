import React, { FC } from "react";
import { Button } from "react-bootstrap";
//import DegreeToggle from "./DegreeToggle";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import DegreeToggle from "./DegreeToggle";

const ChartToggles: FC = () => {
  return (
    <div className="chartToggle text-center">
      <DegreeToggle />{" "}
      <Button variant="secondary">Avg Temp</Button>{" "}
      {/* update to pull in value for Avg {Temp, RH, dewpoint, etc}, Min {Temp, etc}, and Max {Temp, etc} */}
      <Button variant="secondary">Min Temp</Button>{" "}
      <Button variant="secondary">Max Temp</Button>{" "}
    </div>
  );
};

export default ChartToggles;
