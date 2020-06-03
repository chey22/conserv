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
          <ListGroup.Item>Average IR: {data.avg_ir}</ListGroup.Item>
          <ListGroup.Item>Min IR: {data.min_ir}</ListGroup.Item>
          <ListGroup.Item>Max IR: {data.max_ir}</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }

  return null;
};

const IR: FC = () => {
  const [ir, setIR] = useState([]);

  const getIR = async () => {
    let response = await axios.get("https://app.conserv.io/data/api/health/db");
    let ir = response.data;
    setIR(ir);
  };

  useEffect(() => {
    getIR();
  }, []);

  return (
    <div className="card stacked-graph-card shadow-lg border-none my-5">
      <Card.Header as="h4">Infrared</Card.Header>
      <Card.Body>
        <ResponsiveContainer width="100%" height={450}>
          <LineChart
            data={ir}
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
                value: "Infrared Index",
                angle: -90,
                position: "insideLeft",
                dx: -15,
                dy: 150,
                fontSize: 22,
              }}
            />
            <CartesianGrid strokeDasharray="5 5" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              name="Average IR"
              type="monotone"
              dataKey="avg_ir"
              strokeWidth={2}
              stroke="#2ca82c" // green = avg IR
              dot={false}
              activeDot={{ r: 5 }}
            />
            {/* <Line
              name="Minimum IR"
              type="monotone"
              dataKey="min_ir"
              strokeWidth={2}
              stroke="#3b94e7" // blue = low IR
              dot={false}
              activeDot={{ r: 5 }}
            />
            <Line
              name="Maximum IR"
              type="monotone"
              dataKey="max_ir"
              strokeWidth={2}
              stroke="#a82c2c" // red = high IR
              dot={false}
              activeDot={{ r: 5 }}
            /> */}
          </LineChart>
        </ResponsiveContainer>
      </Card.Body>
    </div>
  );
};
export default IR;
