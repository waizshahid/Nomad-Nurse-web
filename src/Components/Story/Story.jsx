import React, { useEffect } from "react";
import Line from "../../Assests/Vector.png";
import "./Story.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Story = () => {
  useEffect(() => {
    AOS.init({ easing: "ease-out" });
  }, []);

  return (
    <div className="story-container">
      <h2 className="title" data-aos="zoom-in" data-aos-duration="800">
        Our Story
      </h2>
      <div className="image-container">
        <img
          src={Line}
          alt="Image"
          data-aos="zoom-in"
          data-aos-duration="800"
        />
      </div>
      <p className="paragraph" data-aos="zoom-in" data-aos-duration="800">
        The inception of Nomad Nurses arose from our personal experiences within
        the dental profession. We encountered difficulties in booking and
        securing nurses, realizing that nurses lacked the means and access to
        practices seeking locum professionals. Through the creation of our
        groundbreaking app and website, we successfully filled this void,
        facilitating communication between locum nurses and dental practices. As
        practicing dentists without a dedicated nurse, we recognized the vital
        significance of this venture for the dental industry. Our objective is
        to streamline the process of booking dental nurses for practices,
        ensuring a seamless experience and enabling nurses to find opportunities
        with the touch of a button.
      </p>
    </div>
  );
};

export default Story;
