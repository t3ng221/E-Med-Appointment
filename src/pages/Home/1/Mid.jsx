import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

const Mid = () => {
  return (
    <Container>
      <Zoom top cascade>
        <h2
          className="text-center mt-5 text-white"
          style={{ fontSize: "50px" }}
        ></h2>
      </Zoom>
      <Bounce top cascade>
        <img className="rounded" src="./3.png" alt="" width="98%" />
      </Bounce>

      <Row>
        <Col className="mt-5">
          <Slide left>
            <img src="./mcc.svg" alt="" width="100%" />
          </Slide>
        </Col>
        <Col className=" mt-5">
          <Slide right>
            <h2 className="fw-bolder text-center">Medical Support</h2>
            <p className="mt-3 fw-bold">
            E-Medic is an advanced medical industry in Bangladesh.
             E-Medic provides an smart solution for doctor and patient.
              E-Medic ensure best healthcare in bangladesh.
               This is the first time in bangladesh where patient can easily search for doctors and store their previous prescription 
               where doctor can see them when attending a patient for check up. 
               Doctor can also provide prescription by our site. All prescription will be stored in patient profile.
                E-Medic also provide fastest medicine commerce site in bangladesh.
                 Everyone can buy medicine from our shop.
            </p>
          </Slide>

          <Link to="/doctors">
            <Button variant="outline-secondary">Chest</Button>
            <Button className="ms-3" variant="outline-success">
              Medicine
            </Button>
            <Button className="ms-3" variant="outline-primary">
              Eye
            </Button>
            <Button className="ms-3" variant="outline-danger">
              Psycology
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5">
          <Slide top>
            <h2 className="fw-bolder text-center">Medical Research</h2>
            <p className="mt-3 fw-bold">
            We have the best research team who always works hard to give the best experience for our users.
            </p>
          </Slide>

          <Link to="/doctors">
            <Button variant="outline-secondary">Chest</Button>
            <Button className="ms-3" variant="outline-success">
              Medicine
            </Button>
            <Button className="ms-3" variant="outline-primary">
              Eye
            </Button>
            <Button className="ms-3" variant="outline-danger">
              Psycology
            </Button>
          </Link>
        </Col>
        <Col className=" mt-5">
          <Zoom top>
            <img src="./med-res.svg" alt="" width="100%" />
          </Zoom>
        </Col>
      </Row>
    </Container>
  );
};

export default Mid;
