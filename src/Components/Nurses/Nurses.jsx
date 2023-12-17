import React, { useEffect } from "react";
import "./Nurse.css";
import Logo from "../../Assests/Original on Transparent 2.png";
import Img from "../../Assests/Rectangle.png";
import Img1 from "../../Assests/Vector.png";
import AOS from "aos";
import "aos/dist/aos.css";
import MovingText from 'react-moving-text'


const Data = [
  { animation: 'fadeInFromLeft', text: 'Industry Leading Pay' },
  { animation: 'fadeOutToRight', text: 'Industry Leading Pay' },
  { animation: 'fadeInFromRight', text: 'Weekly Payments' },
  { animation: 'fadeOutToBottom', text: 'Weekly Payments' },
  { animation: 'fadeInFromBottom', text: 'Flexibility' },
  { animation: 'fadeOutToTop', text: 'Flexibility' },
  { animation: 'fadeInFromTop', text: 'Bonuses' },
  { animation: 'fadeOutToLeft', text: 'Bonuses' },
  { animation: 'fadeInFromLeft', text: 'Cosmopolitan Scrubs' },
  { animation: 'fadeOutToBottom', text: 'Cosmopolitan Scrubs' },
  { animation: 'fadeInFromBottom', text: 'Discounted Dental Treatments' },
  { animation: 'fadeOutToRight', text: 'Discounted Dental Treatments' },
  { animation: 'fadeInFromRight', text: 'Interactive App' },
  { animation: 'fadeOutToLeft', text: 'Interactive App' },
];
const Nurses = () => {

  const [ counter, setCounter] = React.useState(0)
  const [ data, setData ] = React.useState(Data[0])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % Data.length);
    }, 700);

    return () => clearInterval(intervalId); // Clear interval on component unmount

  }, []); // Empty dependency array to run effect only once on mount

  useEffect(() => {
    setData(Data[counter]);
  }, [counter]);
  return (
    <div className="nurses-container">
      <div className="left-section1" data-aos="zoom-in" data-aos-duration="800">
        <img src={Logo} alt="Logo" className="logo1" data-aos="zoom-in" />
        <h2 data-aos="zoom-in" data-aos-duration="800">
          Why <span style={{ color: "#497367" }}>Nurses</span> should join us!
        </h2>
        <p data-aos="zoom-in" data-aos-duration="800">
          At Nomad Nurse, we redefine the experience of dental nurse recruitment
          offering a platform that goes beyond the conventional. We understand
          the unique challenges faced by both dental practices and nurses in the
          industry. By choosing to work with us, dental nurses gain access to a
          seamless and user-friendly platform that effortlessly connects them
          with diverse opportunities. We prioritize transparency, reliability,
          and efficiency in the recruitment process, ensuring that every match
          is not just a placement but a harmonious collaboration. Join us in
          shaping the future of dental care staffing, where your skills are
          valued, and your career is empowered.
        </p>
        <button data-aos="zoom-in" data-aos-duration="800">
          Join us
        </button>
      </div>

      <div
        className="right-section1"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-duration="500"
      >
        <div className="image-container1">
          {/* <img src={Img} alt="Industry Leading Pay" className="pay-image1" /> */}
          <div className="overlay1">
          <p className = {data.animation}>
              {data.text}
            </p>
            {/* <p className="overlay-text1">
              Industry
              <br /> Leading pay
            </p> */}
            {/* <img src={Img1} alt="Your Image" className="additional-image" /> */}
          </div>
          {/* <MovingText
              type="bounce"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease-in"
              iteration="5"
              fillMode="none">
              Industry Leading Pay
            </MovingText> */}
        </div>
      </div>
    </div>
  );
};

export default Nurses;