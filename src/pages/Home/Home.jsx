import React from "react";
import ComCarousel from "../../component/ComCarousel";
import Testing from "../../component/Testing";
import Footer from "../../shared/Footer/Footer";
import Mid from "./1/Mid";
import Dservices from "./DoctorServices/Dservices";

const Home = () => {
  return (
    <div>
      <ComCarousel />
      <Dservices />
      <Mid></Mid>
      <Testing></Testing>
      <Footer></Footer>
    </div>
  );
};

export default Home;
