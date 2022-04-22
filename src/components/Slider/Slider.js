//import ZoomSlider from "react-instagram-zoom-slider";
import "react-slideshow-image/dist/styles.css";
import React, { useState } from "react";
// import { SliderData } from "./SliderData";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Slide } from "react-slideshow-image";
import "../../assets/bg.png";
import "./Slider.css";
const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
];
const Slider = () => {
  // const slideImages = [
  //   {
  //     url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  //     caption: "Slide 1",
  //   },
  //   {
  //     url: "bg2.png",
  //     caption: "Slide 2",
  //   },
  //   {
  //     url: "bg.png",
  //     caption: "Slide 3",
  //   },
  // ];
  // const slideImages = [
  //   "bg.png",
  //   "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  //   "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  //   "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  // ];
  // const classes = "slide active";
  // const reducer = (acc, curr) => `${acc} ${styles[curr]}`;
  // const classActive = classes.split(" ").reduce(reducer, "");

  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const popup = true;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        className="left-arrow"
        onClick={prevSlide}
      />
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        className="right-arrow"
        onClick={nextSlide}
      />
      {/* <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} /> */}
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <>
                {" "}
                {popup && (
                  <div className="Overlay">
                    {/* <div></div> */}
                    <img
                      src={slide.image}
                      className={popup ? "Full" : "Small"}
                      alt="Hi"
                    />
                  </div>
                )}
                <img src={slide.image} alt="slider" className="image" />
              </>
            )}
          </div>
        );
      })}
    </section>
  );

  // const slideImages = [
  //   {
  //     url: "bg.png",
  //     caption: "Slide 1",
  //   },
  //   {
  //     url: "bg2.png",
  //     caption: "Slide 2",
  //   },
  //   {
  //     url: "bg2.png",
  //     caption: "Slide 3",
  //   },
  // ];
  // return (
  //   <div className="slide-container">
  //     <Slide>
  //       {slideImages.map((slideImage, index) => (
  //         <div className="each-slide" key={index}>
  //           <div style={{ backgroundImage: `url(${slideImage.url})` }}></div>
  //         </div>
  //       ))}
  //     </Slide>
  //   </div>
  // );
};
export default Slider;
