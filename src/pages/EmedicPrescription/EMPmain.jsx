import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import EMP from "./EMP";

const EMPmain = () => {
    const {user} = useAuth()
    const [morder,setMorder] = useState([]);
    const [fIlteredData,setFIlteredData] = useState([]);
  useEffect(() => {
    fetch("https://project-101-doctor.herokuapp.com/pres-info")
      .then((res) => res.json())
      .then((data) => {
        setMorder(data);
        setFIlteredData(morder.filter((mor) => mor.pmail === user.email));
      });
  }, [morder, user.email]);
  return (
      <>
      <h2 className="text-center mt-5">View E-medic Prescription</h2>
      <Container className="obx">
          
          {
              fIlteredData.map(data => <EMP key={data._id} data={data}></EMP>)
          }
      </Container>
      </>
      
  );
};

export default EMPmain;
