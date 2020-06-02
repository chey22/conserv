import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroup } from "react-bootstrap";
import moment from "moment";

const DisplayTooltip = (props: any) => {
  const { payload, label } = props;

//   const handleChange = (e: any) => {
//     props.onChange(e.target.value);
//   };
headerLabel(label) {
    if (label === data) {
        return "ok"
    }
}
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>{(label: moment.MomentInput) => moment(label).utcOffset(0).format('MM/DD h:mm A')}</Card.Header>
      <ListGroup variant="flush">
        {/* <ListGroup.Item>Cras justo odio{ !payload[0].value ? 0 : payload[0].value }</ListGroup.Item> */}
  <ListGroup.Item>Dapibus ac facilisis in{headerLabel(label)}</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};


const CustomTooltip: FC = () => {
  const [stat, setStat] = useState([]);

  const getStat = async () => {
    let response = await axios.get("https://app.conserv.io/data/api/health/db");
    let stat = response.data;
    let statArr = stat.map(Object.values);
    console.log(statArr);
    setStat(stat);
  };

  useEffect(() => {
    getStat();
  }, []); // pass in values that you want to monitor for changes into the array in second arg

  return (
    <div className="text-center container-fluid">
    <DisplayTooltip
      payload={stat}
      label={stat}
      />
  </div>
    // <div>
    //   <ul className="list-group">
    //     {stat.map((statInstance) => (
    //       <li key={statInstance["bucket"]} className="list-group-item">
    //         {statInstance["avg_rh"]}
    //       </li> // ordinarily would use {statInstance.bucket, but TS seems to want the dot notation replaced with bracket notation }
    //     ))}
    //   </ul>
    // </div>
  );
};

export default CustomTooltip;
