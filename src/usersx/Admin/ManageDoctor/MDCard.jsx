import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MDCard = (props) => {
  const {
    _id,
    name,
    degree,
    speciality,
    chember,
    department,
    img,
  } = props.doctor;
  const notify = () => toast.success("Doctor Deleted");
  const handleDelete = (id) => {
    const isDelete = window.confirm(
      "Are you sure , you want to remove the doctor ?"
    );
    if (isDelete) {
      fetch(`https://project-101-doctor.herokuapp.com/doctorlist/${id}`, {
        method: "DELETE",
      });
    }
    setTimeout(() => {
      notify();
      // window.location.reload();
    }, 1000);
  };
  return (
    //
    <Container className="">
      <ToastContainer />
      <Card style={{ marginBottom: "20px", marginTop: "20px", width: "50rem" }}>
        <Container>
          <Row>
            <Col>
              <img
                src={img}
                alt=""
                width="100%"
                height="300px"
                style={{ borderRadius: "50%" }}
              />
            </Col>
            <Col>
              <h2 className="mt-4">{name}</h2>
              <p className="text-danger">{degree}</p>
              <p className="fw-bold">{speciality}</p>
              <p className="fw-bold">{chember}</p>
              <p className="text-info fw-bold">{department}</p>
            </Col>
            <Col>
              <div className="mt-5 p-3 ms-4">
                <Button
                  className="mt-5 p-3 ms-4"
                  onClick={() => {
                    handleDelete(_id);
                  }}
                  variant="outline-danger"
                >
                  Remove Doctor
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </Container>
  );
};

export default MDCard;
