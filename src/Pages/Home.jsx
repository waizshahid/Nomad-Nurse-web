import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Video from "../Components/Video/Video";
import Story from "../Components/Story/Story";
import Nurses from "../Components/Nurses/Nurses";
import Discounted from "../Components/Navbar/Discounted/Discounted";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Video />
      <Story />
      <Nurses />
      <Discounted />
      <Testimonial />
    </div>
  );
};

export default Home;
