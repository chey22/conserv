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
import { Card, ListGroup } from "react-bootstrap";
import moment from "moment";

const CustomTooltip: FC = (props: any) => {
  const { payload, active } = props;

  if (active) {
    const data = payload[0].payload;
    return (
      <Card style={{ width: "auto" }}>
        <Card.Header>
          {moment(data.bucket).utcOffset(0).format("MM/DD h:mm A")}
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Average Temp: {data.avg_temp1} &deg;C</ListGroup.Item>
          <ListGroup.Item>Min Temp: {data.min_temp1} &deg;C</ListGroup.Item>
          <ListGroup.Item>Max Temp: {data.max_temp1} &deg;C</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }

  return null;
};

const Temp: FC = () => {
  const [temp, setTemp] = useState([]);

  const getTemp = async () => {
    let response = await axios.get("https://app.conserv.io/data/api/health/db");
    let temp = response.data; // array of objects
    setTemp(temp); // sets state after sorting chronologically
  };

  useEffect(() => {
    getTemp();
  }, []); // pass in values that you want to monitor for changes into the array in second arg

  return (
    <div className="card stacked-graph-card shadow-lg border-none my-5">
      <Card.Header as="h4">Temperature</Card.Header>
      <Card.Body>
        <ResponsiveContainer width="100%" height={450}>
          <LineChart
            data={temp}
            margin={{ top: 5, right: 30, left: 20, bottom: 40 }}
          >
            <XAxis
              dataKey="bucket"
              angle={30}
              textAnchor="start"
              tickFormatter={(timestamp) =>
                moment(timestamp).utcOffset(0).format("MM/DD h:mm A")
              }
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
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              name="Average Temperature"
              type="monotone"
              dataKey="avg_temp1"
              strokeWidth={2}
              stroke="#2ca82c" // green = avg temp
              dot={false}
              activeDot={{ r: 5 }}
            />
            {/* <Line
              name="Minimum Temperature"
              type="monotone"
              dataKey="min_temp1"
              strokeWidth={2}
              stroke="#3b94e7" // blue = cold temp
              dot={false}
              activeDot={{ r: 5 }}
            />
            <Line
              name="Maximum Temperature"
              type="monotone"
              dataKey="max_temp1"
              strokeWidth={2}
              stroke="#a82c2c" // red = warm temp
              dot={false}
              activeDot={{ r: 5 }}
            /> */}
          </LineChart>
        </ResponsiveContainer>
      </Card.Body>
    </div>
  );
};
export default Temp;
