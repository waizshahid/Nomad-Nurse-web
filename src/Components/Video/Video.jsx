// Video.js
import React, { useEffect } from "react";
import Video1 from "../Video/video.mp4";
import "./Video.css";

const Video = () => {
  return (
    <div className="main">
      <video src={Video1} autoPlay loop muted className="video" />
      <div className="overlay"></div>

      <div className="left-section">
        <p>
          Connecting Nurses to Practices,
          <br />
          Bridging Excellence Together
        </p>

        <button>Join now</button>
      </div>
    </div>
  );
};

export default Video;
