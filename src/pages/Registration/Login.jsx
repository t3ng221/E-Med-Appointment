import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./style.css";
import "./animation.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../../firebase/firebase.init";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

initializeAuthentication();
const Login = () => {
  const { register, handleSubmit } = useForm();
  const { logout } = useAuth();
  const { login } = useAuth();
  const navigate = useNavigate();
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    axios.put("https://project-101-doctor.herokuapp.com/users", user);
  };
  const onSubmit = (data) => {
    logout();
    login(data.mail, data.pass).then((res) => {
      localStorage.setItem("isAuth", "true");
      navigate("/home");
    });
    navigate("/home");
  };

  const handleGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName);
        localStorage.setItem("isAuth", "true");
        navigate("/home");
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
            Please Login
          </h2>
          <Col xs={12} lg={6} className="mt-5">
            <img
              className="p-5 slide-in-top"
              src="./login.svg"
              alt="registration_picture"
              width="100%"
            />
          </Col>
          <Col lg={6} className="mt-3 slide-in-elliptic-top-fwd">
            <form
              className="from-container mt-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <p className="">
                <Link to="/registration">Didnt Register ? Register here</Link>
              </p>
              <input
                type="email"
                placeholder="Enter Your mail"
                {...register("mail", {})}
              />
              <input
                type="password"
                placeholder="Enter Password"
                {...register("pass", {})}
              />
              <Button
                className="roll-in-left btnx"
                type="Submit"
                variant="primary"
              >
                LOG IN
              </Button>
              <Button
                className="roll-in-left btnx"
                onClick={handleGoogle}
                variant="success"
              >
                Login with Google
              </Button>
              <Divider>
                <Chip className="mt-3" label="OR" />
              </Divider>
              <Link to="/doctorlogin">
                <Button className="roll-in-left btnx w-100" variant="primary">
                  Login as Doctor
                </Button>
              </Link>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
