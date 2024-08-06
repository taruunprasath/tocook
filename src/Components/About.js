import React from "react";
import Profile1 from '../Assets/Profile1.png';

const About = () => {
  return (
      <div>
        <div className="home-container">

      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading2">
          TARUUN PRASATH G S
          </h1>
          <p className="primary-text">
          Frontend-Developer of To Cook
          </p>
        </div>
        <div className="home-image-section">
          <img src={Profile1} alt="" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;