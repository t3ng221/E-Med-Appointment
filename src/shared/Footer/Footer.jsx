import React, { useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./style.css";

const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_luv4qyd",
        "template_oi96rqf",
        form.current,
        "user_blDLKJAU6FyR2FfPUGND8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container
      fluid
      className="fbg rounded"
      style={{
        borderTop: "1px solid blue",
        backgroundImage: "linear-gradient(180deg, #fdfcfb 0%, #e2d1c3 100%)",
      }}
    >
      <Row>
        <Col lg={5} className="" style={{ marginTop: "10rem" }}>
          <div className="d-flex"  style={{ marginTop: "5rem" }}>
            <img
              src="./map.svg"
              alt=""
              width="200rem"
              className=""
              style={{ marginLeft: "4rem" }}
            />
            <div className="ms-3 mt-4">
              <h4>House #17,Road # 8, Dhanmondi R/A. Dhaka-1205</h4>
              <p>Contact : +9901837456,+88019567495</p>
              <p style={{ marginTop: "-12px" }}>
                Email Us : helpline@e-medic.com
              </p>
            </div>
          </div>
        </Col>
        <Col lg={1}></Col>
        <Col lg={5}  style={{ marginTop: "10rem" }}>
          <form className="from-container" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input className="fgh" style={{height:"50px"}} type="text" name="user_name" />
            {/* <label>Email</label> */}
            <input  className="d-none" style={{height:"50px"}} type="email" name="user_email" value="sazedur2000@gmail.com"/>
            <label>Message</label>
            <textarea className="fgh" style={{height:"100px"}}  name="message" />
            <Button className="mt-3 p-3 rounded" variant="primary" type="submit">Send Inquery</Button>
          </form>
        </Col>
        <Col lg={12} className=" mt-5">
            <p className="text-center fw-bold">	&copy; Copyright 2022 three thinkers</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
