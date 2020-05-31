import React, { FC, useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const DegreeToggle: FC = () => {
  const [value, setValue] = useState([1]);

  /*
   * The second argument that will be passed to
   * `handleChange` from `ToggleButtonGroup`
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */

  //  update to reflect math for cel to far when toggled
  const handleChange = (val: any) => setValue(val);

  return (
    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton variant="secondary" value={1}>
        °C
      </ToggleButton>
      <ToggleButton variant="secondary" value={2}>
        °F
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default DegreeToggle;
