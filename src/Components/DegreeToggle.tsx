import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const TemperatureInput = (props: any) => {
  const { scale, avTemp } = props;
  // /**
  //  *  @desc Call when we change the temperature value and
  //  * call the parent onChange method to update the props
  //  *  @param {object}  event
  // */
  const handleChange = (e: any) => {
    props.onChange(e.target.value);
  };


return (
  <div className="container">
    {/* <div>
      <form>
        <div className= "form-group">
          <h3>Enter Temperature in {scale}: </h3>
          <input className="form-control container text-center" id="focusedInputed" type="text" value={avTemp}
                  onChange={handleChange} />
        </div>
      </form>
    </div> */}
        <div className="degreeToggle text-center">
      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton
          name={scale}
          variant="secondary"
          value={scale}
          onChange={handleChange}
        >
          °C
        </ToggleButton>
        <ToggleButton
          variant="secondary"
          value={scale}
          onChange={handleChange}
        >
          °F
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
    </div>
);
}

const DegreeToggle: FC = () => {
  const [scale, setScale] = useState("Celsius");
  const [avTemp, setAvTemp] = useState([]);

  useEffect(() => {
    const getAvTemp = async () => {
      let res = await axios.get("https://app.conserv.io/data/api/health/db");
      let avTemp: any = res.data;
      let avTempArr = avTemp.map(Object.values);
      console.log(avTempArr);

      setAvTemp(avTemp);
      console.log(avTemp);
    };
    getAvTemp();
    return () => {
      setScale("");
    };
  }, []);

  const handleCelsiusChange = (avTemp: any) => {
    setAvTemp(avTemp);
    //console.log('handled celc')
  };
  // /**
  //  *  @desc Call when we change the Fahrenheit avTemp
  //  *  @param {string} avTemp
  // */
  const handleFahrenheitChange = (avTemp: any) => {
    setScale("Fahrenheit");
    setAvTemp(avTemp);
    console.log(avTemp);
  };

  const tryConvert = (avTemp: any, convert: any) => {
    const input = parseFloat(avTemp);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    return output.toString();
  };

  const toCelsius = (fahrenheit: number) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  const toFahrenheit = (celsius: number) => {
    return (celsius * 9) / 5 + 32;
  };
  const celsius: any =
    scale === "Fahrenheit" ? tryConvert(avTemp, toCelsius) : avTemp;
  const fahrenheit: any =
    scale === "Celsius" ? tryConvert(avTemp, toFahrenheit) : avTemp;

  return (
    // <div className="degreeToggle text-center">
    //   <ToggleButtonGroup type="radio" name="options" defaultValue={celsius}>
    //     <ToggleButton
    //       variant="secondary"
    //       value={celsius}
    //       onChange={handleCelsiusChange}
    //     >
    //       °C
    //     </ToggleButton>
    //     <ToggleButton
    //       variant="secondary"
    //       value={fahrenheit}
    //       onChange={handleFahrenheitChange}
    //     >
    //       °F
    //     </ToggleButton>
    //   </ToggleButtonGroup>
    // </div>
    <div className="text-center container-fluid">
      <TemperatureInput
        scale="Celsius"
        value={celsius}
        onChange={handleCelsiusChange} />
      <TemperatureInput
        scale="Fahrenheit"
        value={fahrenheit}
        onChange={handleFahrenheitChange} />
    </div>
  );
  // );
};
export default DegreeToggle;

// import React, { FC, useState, useEffect } from "react";
// import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

// const DegreeToggle: FC = () => {
//   const [value, setValue] = useState([1]);

//   /*
//    * The second argument that will be passed to
//    * `handleChange` from `ToggleButtonGroup`
//    * is the SyntheticEvent object, but we are
//    * not using it in this example so we will omit it.
//    */

//   //  update to reflect math for cel to far when toggled
//   const handleChange = (val: any) => setValue(val);

//   return (
//     <div className="degreeToggle text-center">
//     <ToggleButtonGroup type="radio" name="options" defaultValue={1} onChange={handleChange}>
//       <ToggleButton variant="secondary" value={1}>
//         °C
//       </ToggleButton>
//       <ToggleButton variant="secondary" value={2}>
//         °F
//       </ToggleButton>
//     </ToggleButtonGroup>
//     </div>
//   );
// };

// export default DegreeToggle;
