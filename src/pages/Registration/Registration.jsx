import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./style.css";
import "./animation.css";
import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../../firebase/firebase.init";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


initializeAuthentication();
const Registration = () => {
  const { registerUser, SetUser, auth, updateProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const genRandom = (num) => {
    return Math.floor(Math.random() * num) + 1;
  };

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    axios.post("https://project-101-doctor.herokuapp.com/users/", user);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const pass = data.password1;
    const pass2 = data.password2;
    const email = data.mail;
    const name = data.displayName;
    data.img_url = `https://randomuser.me/api/portraits/men/${genRandom(
      100
    )}.jpg`;
    const img_url = `https://randomuser.me/api/portraits/men/${genRandom(
      100
    )}.jpg`;

    if (pass !== pass2) {
      alert("Password Not Matched");
      return;
    }
    axios.post('https://project-101-doctor.herokuapp.com/reg-user-info',data);
    registerUser(name, email, pass)
      .then((userCredential) => {
        const updatedUser = { email, displayName: name };
        SetUser(updatedUser);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: img_url,
        }).then(() => {
          localStorage.setItem("isAuth", "true");
          saveUser(email, name);
          navigate(location.state?.from || "/home");
        });
      })
      .catch((error) => {});
  };

  const handleGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName);
        localStorage.setItem("isAuth", "true");
        navigate(location.state?.from || "/home");
      })
      .catch((error) => {});
  };
  return (
    <div className="bgr">
      <Container>
        <Row>
          <h2
            className="text-center bounce-in-top"
            style={{ marginTop: "6rem" }}
          >
            Please Register
          </h2>
          <Col xs={12} lg={6} className="mt-5">
            <img
              className="p-5 slide-in-top"
              src="./registration.svg"
              alt="registration_picture"
              width="100%"
            />
          </Col>
          <Col lg={6} className="mt-5 slide-in-elliptic-top-fwd">
            <form className="from-container" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Full Name"
                {...register("displayName", { required: true})}
              />
              <input
                type="email"
                placeholder="Enter Your mail"
                {...register("mail", { required: true})}
              />
              <input type="number" placeholder="Age" {...register("Age", { required: true})} />
              <input
                type="tel"
                placeholder="Enter Contact Number"
                {...register("contact", { required: true})}
              />
              <input
                type="password"
                placeholder="Enter Password"
                {...register("password1", { required: true})}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("password2", { required: true})}
              />

              <Button
                className="roll-in-left btnx"
                type="Submit"
                variant="primary"
              >
                Register
              </Button>
              <Button
                className="roll-in-left btnx"
                onClick={handleGoogle}
                variant="success"
              >
                Register with Google
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
