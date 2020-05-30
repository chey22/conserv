import React, { FC } from "react";
import axios from "axios";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { Card, Button } from "react-bootstrap";

const testData = [
  { date: "2020-05-22T04:00:00.000Z", avg_temp1: 24.19 },
  { date: "2020-05-23T04:00:00.000Z", avg_temp1: 23.9 },
  { date: "2020-05-24T04:00:00.000Z", avg_temp1: 24.12 },
  { date: "2020-05-25T04:00:00.000Z", avg_temp1: 24.65 },
  { date: "2020-05-26T04:00:00.000Z", avg_temp1: 23.87 },
  { date: "2020-05-27T04:00:00.000Z", avg_temp1: 24.34 },
  { date: "2020-05-28T04:00:00.000Z", avg_temp1: 23.65 },
];

const data2: any = [];
const Temp: FC = () => {
  
  axios({
    method: "get", //default
    url: "https://app.conserv.io/data/api/health/db",
    responseType: "json", //default
    // data: {
    //     bucket: ''
    // }
  }).then(function (response) {
    const dataObj = response.data;
    console.log(dataObj);

    // axios.spread((value: any) => {
    //     console.log(value.dataObj[0].avg_temp1);
    // console.log(response)

    // sorting chronologically; sanitizing & normalizing data
    dataObj.sort(function (a: any, b: any) {
      return a.bucket - b.bucket;
      // resObj.bucket = new Date(resObj.bucket)
    });

    for (var k in dataObj) {
      data2.push(dataObj[k]);
    }

    let dataArr = dataObj.map(Object.values);
    console.log(dataArr);

    // let dataObjJSON = JSON.stringify(dataObj);
    // var jsonData = JSON.parse(dataObjJSON);

    // var keys = [];
    // for (var k in jsonData) {
    //   keys.push(k);
    // }

    // var values = [];
    // for (var k in jsonData) {
    //   values.push(jsonData[k]);
    // }

    //console.log(keys[0]);
    //console.log(values[0]);
  });
  return (
    <div className="chart">
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>Temperature</Card.Title>
          <Card.Body>
            <div className="temp">
              <LineChart
                width={600} //how to change to % to decrease card size?
                height={300}
                data={data2}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="bucket" />
                <YAxis
                  type="number"
                  domain={["auto", "auto"]}
                  // ticks={[23, 23.5, 24, 24.5, 25]}
                />
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
            </div>
          </Card.Body>
          <div className="chartToggle text-center">
            <Button variant="secondary">°C / °F</Button>{" "}
            <Button variant="secondary">Avg Temp</Button>{" "}
            <Button variant="secondary">Min Temp</Button>{" "}
            <Button variant="secondary">Max Temp</Button>{" "}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Temp;
