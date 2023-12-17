// Testimonial.js

import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import Vector from "../../Assests/Vector.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ easing: "ease-out" });
  }, []);
  const [slider, setSlider] = useState(null);
  const [activeArrow, setActiveArrow] = useState("next");

  const handleNext = () => {
    if (slider) {
      slider.slickNext();
      setActiveArrow("next");
    }
  };

  const handlePrev = () => {
    if (slider) {
      slider.slickPrev();
      setActiveArrow("prev");
    }
  };

  const settings = {
    infinite: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="testimonial-container">
      <h2
        className="testimonial-heading"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        Testimonials
      </h2>
      <img
        src={Vector}
        alt="Testimonial Image"
        className="testimonial-image"
        data-aos="zoom-in"
        data-aos-duration="800"
      />

      <p
        className="testimonial-paragraph"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        Hear how others have found the Nomad Nurse experience
      </p>

      <div
        className="slider-container"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <Slider ref={(c) => setSlider(c)} {...settings}>
          <div className="slider-item">
            <h3>Yasmine</h3>
            <h5>Locum dental nurse</h5>
            <p>
              The platform has given me access to a wide range of opportunities,
              and the process of securing positions is seamless. I appreciate
              the consistent support and the chance to work with various dental
              practices
            </p>
          </div>{" "}
          <div className="slider-item">
            <h3>Yasmine</h3>
            <h5>Locum dental nurse</h5>
            <p>
              The platform has given me access to a wide range of opportunities,
              and the process of securing positions is seamless. I appreciate
              the consistent support and the chance to work with various dental
              practices
            </p>
          </div>{" "}
          <div className="slider-item">
            <h3>Yasmine</h3>
            <h5>Locum dental nurse</h5>
            <p>
              The platform has given me access to a wide range of opportunities,
              and the process of securing positions is seamless. I appreciate
              the consistent support and the chance to work with various dental
              practices
            </p>
          </div>
        </Slider>
        <div className="custom-arrows">
          <div
            className={`custom-arrow custom-prev ${
              activeArrow === "prev" ? "active" : ""
            }`}
            onClick={handlePrev}
          >
            {">"}
          </div>
          <div
            className={`custom-arrow custom-next ${
              activeArrow === "next" ? "active" : ""
            }`}
            onClick={handleNext}
          >
            {"<"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
