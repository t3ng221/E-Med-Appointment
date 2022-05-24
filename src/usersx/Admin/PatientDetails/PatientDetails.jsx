import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import PDC from "./PDC";

const PatientDetails = () => {
  const { user } = useAuth();
  const [morder, setMorder] = useState([]);
  const [filteredData, setFIlteredData] = useState([]);
  useEffect(() => {
    fetch("https://project-101-doctor.herokuapp.com/users-info")
      .then((res) => res.json())
      .then((data) => {
        setMorder(data);
        setFIlteredData(
          morder.filter((mor) => mor.Doctor === user.displayName)
        );
      });
  }, [morder, filteredData, user.displayName]);
  return (
    <Container>
      <h2 className="text-center mt-5">All Patient Appointment</h2>
      <Container className="ob">
        {morder.map((fdata) => (
          <PDC key={fdata._id} data={fdata}></PDC>
        ))}
      </Container>
    </Container>
  );
};

export default PatientDetails;
