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
import CustomTooltip from "./CustomTooltip";

const Dewpoint: FC = () => {
  const [dew, setDew] = useState([]);

    const getDew = async () => {
      let response = await axios.get(
        "https://app.conserv.io/data/api/health/db"
      );
      let dew = response.data;
      let dewArr = dew.map(Object.values)
      console.log(dewArr)
      setDew(dew);
    };
    
    useEffect(() => {
        getDew();
    }, [])

  return (
    <div className="card stacked-graph-card shadow-lg border-none">
      <Card.Header as="h4">Dewpoint</Card.Header>
      <Card.Body>
        <Card.Title>card title placeholder</Card.Title>
        <ResponsiveContainer width="100%" height={450}>
          <LineChart
            data={dew}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey="bucket"
              angle={30} // eliminates need for margin for ticks on angle
              textAnchor="start"
              tickFormatter={(timestamp) =>
                moment(timestamp).utcOffset(0).format("MM/DD h:mm A")
              } //UTC offset set to none bc bucket was 5 hours ahead of local time
              //interval={8} reave off for cleaner window minimizing
            />
            <YAxis type="number"
            domain={["auto", "auto"]}
            label={{value: 'Degrees (Celsius)', angle: -90, position: 'insideLeft', dx: -15, dy: 100, fontSize: 22}}
             />
            <CartesianGrid strokeDasharray="5 5" />
            
            <Tooltip content={<CustomTooltip />} />
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
              stroke="#3be73b" // green = avg temp
              dot={false}
              activeDot={{ r: 5 }} // slightly incr the radius of the dot that's moused over
            />
          </LineChart>
        </ResponsiveContainer>
      </Card.Body>
      <Card.Footer></Card.Footer>
    </div>
  );
};
export default Dewpoint;
