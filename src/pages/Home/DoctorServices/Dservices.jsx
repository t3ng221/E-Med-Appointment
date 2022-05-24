import React from "react";
import { Container } from "react-bootstrap";
import useDoctorlist from "../../../hooks/useDoctorlist";
import DservicesCard from "./DservicesCard";
import "./style.css";
import "./animation.css";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

const Dservices = () => {
  const [doctorlists] = useDoctorlist();
  return (
    <Container>
      <Zoom top cascade>
        <h2 className="text-center" style={{ fontSize: "50px",color:"tomato" }}>
          Get Appointment from our Top Doctor
        </h2>
      </Zoom>

      <div className="grid-container text-center mt-5 slide-in-bck-cente">
        {doctorlists.slice(0, 3).map((doctor) => (
          <Slide left>
            <DservicesCard key={doctor._id} doctor={doctor}></DservicesCard>
          </Slide>
        ))}
      </div>
    </Container>
  );
};

export default Dservices;
