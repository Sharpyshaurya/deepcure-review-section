import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import whiteImage from "../Image/Solid_white.png";
import "./Review.css";

export default function App() {
  return (
    <>
      <div className="section">
        <div className="sectionWrapper">
          <div className="heading">
            <h4>What do people say?</h4>
          </div>
          <Carousel className="carousalSlide">
            <Carousel.Item interval={1500}>
              <img
                className="whiteImage d-block w-100"
                src={whiteImage}
                alt="Image One"
              />
              <div className="messages">
                <p>
                  "I was skeptical about using an online consultation service,
                  but I was pleasantly surprised by the exceptional care I
                  received. The doctor was compassionate, took the time to
                  listen to my concerns, and offered clear explanations. The
                  platform was secure, and my privacy was well-protected. The
                  guidance I received here helped me address my health issue
                  effectively. I am grateful for the convenience and expertise
                  provided by this service."
                </p>
              </div>
              <Carousel.Caption className="slide-caption">
                <h3>Patient Name</h3>
                <p>Harsh Kumar, 19</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="whiteImage d-block w-100"
                src={whiteImage}
                alt="Image Two"
              />
              <div className="messages">
                <p>
                  "I cannot express how grateful I am for the exceptional
                  medical support I received through this platform. The doctor's
                  expertise and professionalism were evident throughout the
                  consultation. They addressed all my questions and provided me
                  with valuable recommendations for managing my condition. The
                  convenience of scheduling the consultation at a time that
                  suited me was an added bonus. I highly recommend this service
                  to anyone in need of reliable medical advice."
                </p>
              </div>
              <Carousel.Caption className="slide-caption">
                <h3>Patient's Name</h3>
                <p>Shamita Reddy, 21</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="whiteImage d-block w-100"
                src={whiteImage}
                alt="Image Two"
              />
              <div className="messages">
                <p>
                  "I cannot express how grateful I am for the exceptional
                  medical support I received through this platform. The doctor's
                  expertise and professionalism were evident throughout the
                  consultation. They addressed all my questions and provided me
                  with valuable recommendations for managing my condition. The
                  convenience of scheduling the consultation at a time that
                  suited me was an added bonus. I highly recommend this service
                  to anyone in need of reliable medical advice."
                </p>
              </div>
              <Carousel.Caption className="slide-caption">
                <h3>Patient's Name</h3>
                <p>Shamita Reddy, 21</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}
