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
import moment from "moment";
//import CustomTooltip from "../CustomTooltip";

const Dewpoint: FC = () => {
  const [dew, setDew] = useState([]);

  const getDew = async () => {
    let response = await axios.get("https://app.conserv.io/data/api/health/db");

    let dew = response.data; // array of objects

    // dew.sort(function (a: any, b: any) { // sorts by bucket. likely unnecessary since API does too
    //   return a.bucket - b.bucket;
    // });

    // let dewArr = dew.map(Object.values); // converts from array of objects to array of arrays
    // console.log(dewArr);

    setDew(dew); // sets state after sorting chronologically

    // for (var k in dew) { // this doubles the array for some reason unless placed after the state is set. *still doubles chart lines, so likely unnecessary
    //   dew.push(dew[k]);
    // }
  };

  useEffect(() => {
    getDew();
  }, []); // pass in values that you want to monitor for changes into the array in second arg

  return (
    <div className="card stacked-graph-card shadow-lg border-none my-5">
      <Card.Header as="h4">Dewpoint</Card.Header>
      <Card.Body>
        <Card.Title>
          card title placeholder - how to put legend here if desired?
        </Card.Title>
        <ResponsiveContainer width="100%" height={450}>
          <LineChart
            data={dew}
            margin={{ top: 5, right: 30, left: 20, bottom: 40 }}
          >
            <XAxis
              dataKey="bucket"
              angle={30} // eliminates need for margin for ticks on angle
              textAnchor="start"
              tickFormatter={(timestamp) =>
                moment(timestamp).utcOffset(0).format("MM/DD h:mm A")
              } //UTC offset set to none bc bucket was 5 hours ahead of local time
              //interval={8} leave off for cleaner window minimizing
            />
            <YAxis
              type="number"
              domain={["auto", "auto"]}
              label={{
                value: "Degrees (Celsius)",
                angle: -90,
                position: "insideLeft",
                dx: -15,
                dy: 100,
                fontSize: 22,
              }}
            />
            <CartesianGrid strokeDasharray="5 5" />
            <Tooltip />
            {/* <Tooltip content={<CustomTooltip />} /> */}
            {/* <Tooltip
            formatter={function(value, name) {
              return `${value}`;
            }}
            labelFormatter={function(value) {
              return `label: ${value}`;
            }}
            /> */}
            <Legend
            //wrapperStyle={{position: "absolute", height: "60px", padding: "12px"}}
            />
            <Line
              name="Average Dewpoint"
              type="monotone"
              dataKey="avg_dewpoint"
              strokeWidth={2}
              stroke="#2ca82c" // green = avg temp
              dot={false}
              activeDot={{ r: 5 }} // slightly incr the radius of the dot that's moused over
            />
          </LineChart>
        </ResponsiveContainer>
      </Card.Body>
      <Card.Footer>
        card footer placeholder - how to put legend here if desired?
      </Card.Footer>
    </div>
  );
};
export default Dewpoint;
