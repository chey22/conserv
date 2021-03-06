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
          <ListGroup.Item>Average RH: {data.avg_rh} %</ListGroup.Item>
          <ListGroup.Item>Min RH: {data.min_rh} %</ListGroup.Item>
          <ListGroup.Item>Max RH: {data.max_rh} %</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }

  return null;
};

const RH: FC = () => {
  const [rh, setRH] = useState([]);

  const getRH = async () => {
    let response = await axios.get("https://app.conserv.io/data/api/health/db");
    let rh = response.data;
    setRH(rh);
  };

  useEffect(() => {
    getRH();
  }, []);

  return (
    <div className="card stacked-graph-card shadow-lg border-none my-5">
      <Card.Header as="h4">Relative Humidity</Card.Header>
      <Card.Body>
        <ResponsiveContainer width="100%" height={450}>
          <LineChart
            data={rh}
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
                value: "Percent (%)",
                angle: -90,
                position: "insideLeft",
                dx: -15,
                dy: 60,
                fontSize: 22,
              }}
            />
            <CartesianGrid strokeDasharray="5 5" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              name="Average RH"
              type="monotone"
              dataKey="avg_rh"
              strokeWidth={2}
              stroke="#2ca82c" // green = avg RH
              dot={false}
              activeDot={{ r: 5 }}
            />
            {/* <Line
              name="Minimum RH"
              type="monotone"
              dataKey="min_rh"
              strokeWidth={2}
              stroke="#3b94e7" // blue = cold RH
              dot={false}
              activeDot={{ r: 5 }}
            />
            <Line
              name="Maximum RH"
              type="monotone"
              dataKey="max_rh"
              strokeWidth={2}
              stroke="#a82c2c" // red = warm RH
              dot={false}
              activeDot={{ r: 5 }}
            /> */}
          </LineChart>
        </ResponsiveContainer>
      </Card.Body>
    </div>
  );
};
export default RH;
