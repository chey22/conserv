import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

// const TemperatureInput = (props: any) => {
//   const {scale, value} = props
//   // /**
//   //  *  @desc Call when we change the temperature value and 
//   //  * call the parent onChange method to update the props
//   //  *  @param {object}  event
//   // */
//   const handleChange = (e: any) =>  {
//     props.onChange(e.target.value);
//   }
//   return (
//     <div className="container">
//         <form>
//           <div className= "form-group">
//             <h3>Enter Temperature in {scale}: </h3>
//             <input className="form-control container text-center" id="focusedInputed" type="text" value={value}
//                     onChange={handleChange} />
//           </div>
//         </form>
//       </div>
//   );
// }
// /**
//  * @desc Calculator functional component that will handle the calculations
//  */
const Calculator = () => {
  const [ scale, setScale ] =  useState('Celsius')
  const [ value, setValue]  =  useState([])
  // /** 
  //  * @desc useEffect hook to get the temperature value
  //  * @return {func} that will call when component unmount 
  // */
  useEffect( () => {
    const getValue = async () => {
    let res = await axios.get("https://app.conserv.io/data/api/health/db")
    let value = res.data
    let dataArr = value.map(Object.values);
    console.log(dataArr);

    setValue(value)
    console.log(value)
    }
    getValue();
    // return () => { setScale("")  }
  },[])
  // /** 
  //  * @desc useEffect hook that will console the values when props update 
  // */
  useEffect( () => {
    setTimeout(() => {
      console.log(`Changed ${scale} value to ${value}`);
    }, 100);
  })
  // /**
  //  *  @desc Call when we change the Celsius value 
  //  *  @param {string} value
  // */
  const handleCelsiusChange = (value: any) => {
    setValue(value)
    //console.log('handled celc')
  }
  // /**
  //  *  @desc Call when we change the Fahrenheit value 
  //  *  @param {string} value
  // */
  const handleFahrenheitChange = (value: any) => {
    setScale('Fahrenheit')
    setValue(value)
    //console.log('handled fahr')
  }
  // /**
  //  *  @desc To  covert the  celsius, fahrenheit values
  //  *  @param {string} value
  //  *  @param {func} convert
  // */
  const tryConvert = (value: any, convert: any) => {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  // /** @desc To convert value in celsius */
  const toCelsius = (fahrenheit: any) => {
    return (fahrenheit - 32) * 5 / 9;
  }
  // /** @desc To convert value in fahrenheit */
  const toFahrenheit = (celsius: any) => {
    return (celsius * 9 / 5) + 32;
  }
  const celsius = scale === 'Fahrenheit' ? tryConvert(value, toCelsius) : value;
  const fahrenheit = scale === 'Celsius' ? tryConvert(value, toFahrenheit) : value;
    return (
          <div className="degreeToggle text-center">
    <ToggleButtonGroup type="radio"
    name="options"
    defaultValue={1}
    >
      <ToggleButton variant="secondary" value={1}
    onChange={handleCelsiusChange}>
        °C
      </ToggleButton>
      <ToggleButton variant="secondary" value={2}
          onChange={handleFahrenheitChange}>
        °F
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
      // <div className="text-center container-fluid">
      //   <TemperatureInput
      //     scale="Celsius"
      //     value={celsius}
      //     onChange={handleCelsiusChange} />
      //   <TemperatureInput
      //     scale="Fahrenheit"
      //     value={fahrenheit}
      //     onChange={handleFahrenheitChange} />
      // </div>
    // );
}
export default Calculator


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
