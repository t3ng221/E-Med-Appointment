import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const DocCard = (props) => {
  const notify = () => toast.success("Appointment Deleted Successfully ");
  const {
    _id,
    Doctor,
    Name,
    Email,
    apdate,
    aptime,
    detail,
    apstatus,
    url,
  } = props.data;

  const handleDelete = (id) => {
    const isDelete = window.confirm(
      "Are you sure , you want to permanently delete appointment ?"
    );
    if (isDelete) {
      fetch(`https://project-101-doctor.herokuapp.com/users-info/${id}`, {
        method: "DELETE",
      });
      notify();
      setTimeout(() => {
        window.location.reload(false);
      }, 500);
    }
  };
  return (
    <Container style={{ marginBottom: "20px", marginTop: "20px" }}>
      <ToastContainer />
      <Card>
        <Card.Body>
          <Container>
            <Row>
              <Col lg={4}>
                <Zoom>
                  <img
                    alt="that wanaka tree"
                    src={url}
                    width="390px"
                    height="400px"
                  />
                </Zoom>
              </Col>
              <Col lg={6}>
                <h3>Appointed Doctor : {Doctor}</h3>
                <p>Appointment Status : {apstatus} </p>

                <div className="mt-5">
                  <h5>Patient Name : {Name}</h5>
                  <p className="fw-bold">Patient Contact : {Email}</p>
                  <p className="fw-bold">Appointed Date : {apdate.substr(0,10)}</p>
                  <p className="fw-bold">Appointed Time : {aptime}</p>
                </div>
                <p className="text-center fw-bold">Problem Details</p>
                <Card.Text>{detail}</Card.Text>
                <Button
                  onClick={() => handleDelete(_id)}
                  variant="outline-danger"
                >
                    Delete Appointment
                </Button>
              </Col>
              <Col lg={2}></Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DocCard;
