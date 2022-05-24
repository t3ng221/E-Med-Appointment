import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const EMP = (props) => {
  console.log(props.data);

  return (
    <>
      <Container className=" mt-5">
        <div>
          <Row>
            <Col
              className="border border-primary rounded"
              md={{ span: 10, offset: 1 }}
            >
              <div className="d-flex p-5">
                <div>
                  <img
                    src="https://svgshare.com/i/djy.svg"
                    alt=""
                    width="80%"
                  />
                </div>
                <div style={{ marginTop: "5rem", width: "100%" }}>
                  <h1>{props.data.doctor}</h1>
                  <p>Patient Name : {props.data.patient}</p>
                  <p style={{ marginTop: "-1rem" }}>
                    Patient Contact : {props.data.pmail}{" "}
                  </p>
                  <p>Date : {props.data.date} </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              className="border border-primary rounded"
              style={{ backgroundColor: "white" }}
              md={{ span: 10, offset: 1 }}
            >
              <Row>
                <Col lg={4} className="">
                  <img
                    className="ms-2 mt-5"
                    src="https://svgshare.com/i/dmR.svg"
                    alt=""
                    width="50%"
                  />
                </Col>
                <Col className="">
                  <div style={{ marginTop: "10rem" }}>
                    <p>{props.data.Prescriptions}</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
      <br />
    </>
  );
};

export default EMP;
