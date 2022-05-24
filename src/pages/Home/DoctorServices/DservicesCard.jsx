import React from "react";
import { Card, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const DservicesCard = (props) => {
  const {  img, name, degree, speciality, chember } = props.doctor;
  return (
    <Card style={{ width: "25rem", height: "40rem" }}>
      <Card.Img
        style={{ width: "100%", height: "50%" }}
        variant="top"
        src={img || "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg"}
      />

      <Stack gap={2} className="">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{degree}</Card.Text>
          <Card.Text>{speciality}</Card.Text>
          <Card.Text>{chember}</Card.Text>
        </Card.Body>
        <Link to="/doctors">
          <Button className="mx-auto p-3 mb-2 w-50" variant="outline-secondary">
            Get Appointment
          </Button>
        </Link>
      </Stack>
    </Card>
  );
};

export default DservicesCard;
