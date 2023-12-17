import React, { useEffect } from "react";
import "./Nurse.css";
import Logo from "../../Assests/Original on Transparent 2.png";
import Img from "../../Assests/Rectangle.png";
import Img1 from "../../Assests/Vector.png";
import AOS from "aos";
import "aos/dist/aos.css";
import MovingText from 'react-moving-text'


const AnimationsForChaining = ["swing", "flipSlowDown", "fadeInFromBottom", "jelly", "bounce","fadeInFromLeft","unfold" ]
const AnimatedText = ["Industry Leading Pay", "Weekly Payments","Flexibity", "Bonuses" ,"Cosmopoliton Scrubs", "Discounted Dental Treatments","Interactive App"]

const Nurses = () => {

  const [ counter, setCounter] = React.useState(0)
  const [ animationType, setAnimationType ] = React.useState(AnimationsForChaining[0])
  const [ animatedText, setAnimatedText ] = React.useState(AnimatedText[0])

  const handleChainAnimation = () => {
    if(counter==6){
      setCounter(counter-6)
      setAnimationType(AnimationsForChaining[counter-6])
    setAnimatedText(AnimatedText[counter-6])
    console.log("RUN")
    }
    else{
      setCounter(counter+1)
      setAnimationType(AnimationsForChaining[counter+1])
    setAnimatedText(AnimatedText[counter+1])
    }
  }


  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out" });
  }, []);
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
          <MovingText
           onAnimationEnd={handleChainAnimation}
           type={animationType}
              duration="1500ms"
              delay="0s"
              direction="normal"
              timing="ease-in"
              iteration="1"
              fillMode="none">
              {animatedText}
            </MovingText>
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