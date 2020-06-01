import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import { Card } from "react-bootstrap";
import moment from 'moment'
import ChartToggles from "./ChartToggles";

// TO DO
// include avg_temp2, min_temp1, min_temp2, max_temp1, max_temp2
// custom tooltip?
// why do chart lines, and axis lables not appear on refresh? have to resize screen to display data

//const data2: any = [];
const Temp: FC = () => {
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

    let dataArr = avTemp.map(Object.values);
    console.log(dataArr);
    setAvTemp(avTemp);
  };

  useEffect(() => {
    getAvTemp();
  }, []); // pass in values that you want to monitor for changes into the array in second arg

  return (
    <div className="card stacked-graph-card shadow-lg border-none">
      <Card.Header as="h4">Temperature</Card.Header>
      <Card.Body>
        <Card.Title>card title placeholder</Card.Title>
        <ResponsiveContainer width="100%" height={450}>
          <LineChart
            data={avTemp}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey="bucket"
              tickFormatter={timestamp => moment(timestamp).utcOffset(0).format('MM/DD h:mm A')} //UTC offset set to none bc bucket was 5 hours ahead of local time
              interval={8} // interval of 2 is every hour; 8 is 3hr; 11 is 4hr; 17 is 6hr
              tickMargin={20}
              //minTickGap={10} // better thn interval bc of the way it changes when the window is smaller
              angle={30}
              //tickCount={10}
            />
            <YAxis
              type="number"
              domain={["auto", "auto"]}
            />
            <CartesianGrid strokeDasharray="5 5" />
            <Tooltip /> // can create CustomTooltip:
            https://jsfiddle.net/alidingling/vxq4ep63/
            <Legend
            //wrapperStyle={{position: "absolute", height: "60px", padding: "12px"}}
             />
            <Line
              //name="Average Temperature"
              type="monotone"
              dataKey="avg_temp1"
              strokeWidth={2}
              stroke="#3be73b" // green = avg temp
              dot={false}
              activeDot={{ r: 5 }} // slightly incr the radius of the dot that's moused over
            />
            {/* <Line
              name="Minimum Temperature"
              type="monotone"
              dataKey="min_temp1"
              stroke="#3b94e7" // blue = cold temp
              activeDot={{ r: 5 }}
            />
            <Line
              name="Maximum Temperature"
              type="monotone"
              dataKey="max_temp1"
              stroke="#e74a3b" // red = warm temp
              activeDot={{ r: 5 }}
            /> */}
          </LineChart>
        </ResponsiveContainer>
      </Card.Body>
      <Card.Footer>
        <ChartToggles />
      </Card.Footer>
    </div>
  );
};

export default Temp;
