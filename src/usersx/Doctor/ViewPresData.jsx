import React, { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import VMUC from "./VMUC";

const ViewPresData = () => {
  const [datas, setDatas] = useState([]);
  const [filData, setFilData] = useState([]);
  const { mail, name } = useParams();
  useEffect(() => {
    fetch("https://project-101-doctor.herokuapp.com/pres-img")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setFilData(datas.filter((data) => data.owner === mail));
      });
  }, [datas, mail]);
  console.log(filData);
  return (
    <Container>
      <h2 className="mt-5 text-center">{name}'s All Medical Prescriptions</h2>
      <Container className="obx img-container">
        {filData.length === 0 ? (
            <Alert style={{width:"200%",height:"10%",marginTop:"5rem"}}><h3 className="text-center">No Data Found</h3></Alert>
         
        ) : (
          <Container className="obx img-container">
            {filData.map((data) => (
              <VMUC key={data._id} data={data}></VMUC>
            ))}
          </Container>
        )}
      </Container>
    </Container>
  );
};

export default ViewPresData;
