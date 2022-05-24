import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import storage from "../../firebase/firebase.storage.config";
import MUC from "./MUC";
import "./style.css";


const MultiUpload = () => {
  const notify = () => toast.success("Upload Successfully Completed ");
  const { user } = useAuth();
  const { register,handleSubmit } = useForm();
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [presUrls, setPresUrls] = useState([]);
  const [serData, setSerData] = useState([]);
  const [filterdData, setFilteredData] = useState([]);
  const [title, setTitle] = useState("No Info Available");

  useEffect(() => {
    fetch("https://project-101-doctor.herokuapp.com/pres-img")
      .then((res) => res.json())
      .then((data) => {
        setSerData(data);
        setFilteredData(serData.filter((data) => data.owner === user.email));
      });
  }, [user.email,serData]);
  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };
  const handleUpload = () => {
    const promises = [];
    images.forEach((image) => {
      const storageRef = ref(storage, `/files/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((urls) => {
            setPresUrls((ps) => [...ps, urls]);
          });
        }
      );
    });
    Promise.all(promises)
      .then(() => {
        notify();
      })
      .catch((err) => console.log(err));
  };

  const s2ser = (name, url) => {
    axios.post("https://project-101-doctor.herokuapp.com/pres-img/", {
      context : title,
      owner: name,
      img: url,
    });
  };
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const onSubmit = (data) => {
    setTitle(data.context);
  };
  const handleview = async () => {
    presUrls.forEach((url) => {
      s2ser(user.email, url);
    });
    await delay(1000);
    window.location.reload(false);
  };
  return (
    <Container style={{ marginTop: "70px" }}>
      <ToastContainer />
      <h2 className="text-center">
        <span>Prescription Gallery</span>
      </h2>
      <Container>
        <Row>
          <Col lg={4}>
            <div className="">
              <form
                className="slide-in-elliptic-top-fwd"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h5>Upload Your Medical Data</h5>
                <div className="mt-3">
                  <input
                    className="w-100 mb-3"
                    type="text"
                    placeholder="Context of Prescription"
                   {...register("context", {})} 
                  />
                  <input
                    className="w-100"
                    accept="image/*"
                    type="file"
                    multiple
                    onChangeCapture={handleChange}
                    placeholder="Prescription"
                  />
                </div>
                <div className="d-flex">
                  <span>{progress === 0 ? "" : progress}</span>
                  <span>{progress === 0 ? "" : "% upload complete"}</span>
                </div>
                <br />
                <Button
                  className=" p-3 roll-in-left"
                  variant="primary"
                  type="Submit"
                  onClick={handleUpload}
                >
                  Upload Prescription
                </Button>
                <Button
                  variant="outline-primary"
                  className="ms-3 p-3"
                  onClick={handleview}
                >
                  Refresh
                </Button>
              </form>
            </div>
          </Col>
          <Col lg={8}>
            <Container >
              {filterdData.length === 0 ? (
                <Alert
                  style={{ width: "100%", height: "10%", marginTop: "1rem" }}
                >
                  <h3 className="text-center">No Data Found</h3>
                </Alert>
              ) : (
                <Container className=" obx  i-container mt-5  p-3">
                  {filterdData.map((data) => (
                    <MUC data={data}></MUC>
                  ))}
                </Container>
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MultiUpload;
