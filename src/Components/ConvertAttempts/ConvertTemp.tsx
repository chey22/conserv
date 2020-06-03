import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const TestTemp: FC = () => {
    const [avTemp, setAvTemp] = useState([]);
  
    const getAvTemp = async () => {
      let res = await axios.get("https://app.conserv.io/data/api/health/db");
      let avTemp = res.data;
      avTemp.sort(function (a: any, b: any) {
        return a.bucket - b.bucket;
      });
  
      // // this doubles the array for some reason
      // for (var k in avTemp) {
      //   avTemp.push(avTemp[k]);
      // }
  
      let avTempArr = avTemp.map(Object.values); // converts from array of objects to array of arrays
      console.log(avTempArr);
      setAvTemp(avTemp);
    };
  
    useEffect(() => {
      getAvTemp();
    }, []); // pass in values that you want to monitor for changes into the array in second arg


// pulled from Conserv's site
  const convertTemp = (fromunit: any, tounit: any, avTemp: any, delta: any) => {
    switch(fromunit) {
      case 'celsius':
          switch (tounit) {
            case 'kelvin':
                return (parseFloat(avTemp) + 273.15).toFixed(2);
            case 'fahrenheit':
                return ((parseFloat(avTemp) * 9/5) + (!delta ? 32 : 0)).toFixed(2);
            default:
                return avTemp;
          }
      case 'fahrenheit': 
        switch (tounit) {
          case 'kelvin':
              return (((parseFloat(avTemp) + 273.15) - (!delta ? 32 : 0)) * 5/9).toFixed(2);
          case 'celsius':
              return ((parseFloat(avTemp) - (!delta ? 32 : 0)) * 5/9).toFixed(2);
          default:
              return avTemp;
        }
      case 'kelvin':
        switch (tounit) {
          case 'celsius':
              return (parseFloat(avTemp) - 273.15).toFixed(2);
          case 'fahrenheit':
              return (((parseFloat(avTemp) - 273.15) * 9/5) + (!delta ? 32 : 0)).toFixed(2);
          default:
              return avTemp;
        }
      default:
    }
  }

  return(
    // <div className="degreeToggle text-center">
    //   <TogTestonGroup type="radio" name="options" defaultValue={celsius}>
    //     <ToggleButton
    //       variant="secondary"
    //       value={celsius}
    //       onChange={convertTemp}
    //     >
    //       °C
    //     </ToggleButton>
    //     <ToggleButton
    //       variant="secondary"
    //       value={fahrenheit}
    //       onChange={convertTemp}
    //     >
    //       °F
    //     </ToggleButton>
    //   </ToggleButtonGroup>
    // </div>
    null
  );
}
export default TestTemp