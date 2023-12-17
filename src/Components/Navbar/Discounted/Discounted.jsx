import React, { useEffect } from "react";

import "./Discounted.css"; // Import your CSS file for styling
import Logo from "../../../Assests/Original on Transparent 2.png";
import Vector from "../../../Assests/Vector.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Discounted = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out" });
  }, []);
  return (
    <div className="discounted-container">
      <div className="left-side2" data-aos="zoom-in">
        <p>
          Discounted <br /> Treatments
        </p>
        <img src={Vector} alt="Image" className="logo3" />
      </div>
      <div className="right-side2" data-aos="zoom-in" data-aos-duration="800">
        <img src={Logo} alt="Logo" className="logo2" data-aos="zoom-in" />
        <h2 data-aos="zoom-in" data-aos-duration="800">
          Why <span style={{ color: "#497367" }}>Practices</span> should join
          us!
        </h2>
        <p data-aos="zoom-in" data-aos-duration="800">
          At Nomad Nurse, we invite dental practices to elevate their staffing
          experience by joining our dynamic platform. We understand the pivotal
          role that a skilled dental nurse plays in ensuring the smooth
          functioning of a practice. Our user-friendly interface streamlines the
          recruitment process, allowing you to find the perfect match quickly
          and efficiently. Join us in transforming the way you staff your
          practice and experience the convenience of finding the right dental
          nurse with ease
        </p>
        <button data-aos="zoom-in" data-aos-duration="700">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Discounted;
