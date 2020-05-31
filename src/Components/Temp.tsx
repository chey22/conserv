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
import ChartToggles from "./ChartToggles";

// TO DO
// include avg_temp2, min_temp1, min_temp2, max_temp1, max_temp2
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

    // // doubles the array for some reason
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
            <XAxis dataKey="bucket" />
            <YAxis type="number" domain={["auto", "auto"]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              name="Average Temperature"
              type="monotone"
              dataKey="avg_temp1"
              stroke="#82ca9d"
            />
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
