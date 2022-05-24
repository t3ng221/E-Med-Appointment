import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";

const ComCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="bg">
          <img
            className="d-block m-auto h-75"
            src="./doctor.svg"
            alt="First slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="bg1">
          <img
            className="d-block m-auto"
            src="./doc-trt.svg"
            alt="Second slide"
          />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="bg2">
          <img
            className="d-block m-auto"
            src="./med-doc.svg"
            alt="Third slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ComCarousel;
