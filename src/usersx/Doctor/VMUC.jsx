import React from "react";
import {  Card } from "react-bootstrap";

const VMUC = (props) => {
  return (

    <Card style={{ width: "40rem",height:"50rem",border:"1px solid blue" }}>
      <Card.Img variant="top" src={props.data.img} height="100%"  />
      <Card.Body>
        <h3 className="text-center">{props.data.context}</h3>
      </Card.Body>
    </Card>
  );
};

export default VMUC;
