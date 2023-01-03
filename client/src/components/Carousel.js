import React from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Wrapper from "../wrapper/CarouselWrapper";

function DemoCarousel() {
  return (
    <Wrapper>
      <Carousel>
        <div className="image">
          <img src="/images/airpods.jpg" alt="ps4" />
          <p className="legend">Legend 1</p>
        </div>
        <div className="image">
          <img src="/images/alexa.jpg" alt="ps4 pro" />
          <p className="legend">Legend 2</p>
        </div>
        <div className="image">
          <img src="/images/camera.jpg" alt="ps4 pro2" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </Wrapper>
  );
}

export default DemoCarousel;
// ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));
