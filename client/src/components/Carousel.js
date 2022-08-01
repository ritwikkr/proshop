import React from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Wrapper from "../wrapper/CarouselWrapper";

function DemoCarousel() {
  return (
    <Wrapper>
      <Carousel>
        <div>
          <img
            src="https://images.pexels.com/photos/21067/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            alt="ps4"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/2520829/pexels-photo-2520829.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="ps4 pro"
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/1371985/pexels-photo-1371985.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="ps4 pro2"
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </Wrapper>
  );
}

export default DemoCarousel;
// ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));
