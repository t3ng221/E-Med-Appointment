import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import MyAppointmentCard from "./MyAppointmentCard";
import "./style.css"

const MyAppointment = () => {
  const { user } = useAuth();
  const [morder, setMorder] = useState([]);
  const [filteredData, setFIlteredData] = useState([]);
  useEffect(() => {
    fetch("https://project-101-doctor.herokuapp.com/users-info")
      .then((res) => res.json())
      .then((data) => {
        setMorder(data);
        setFIlteredData(morder.filter((mor) => mor.Email === user.email));
      });
  }, [morder, user.email]);
  return (
    <Container className="mt-5">
      <h2 className="text-center" style={{ fontSize: "50px",color:"tomato" }}>
        My Appointment
      </h2>
      <Container className="obx">
        {filteredData.map((fdata) => (
          <MyAppointmentCard key={fdata._id} data={fdata}></MyAppointmentCard>
        ))}
      </Container>
    </Container>
  );
};

export default MyAppointment;
