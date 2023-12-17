import React from "react";
import Profile1 from '../Assets/Profile1.png';
import Profile2 from '../Assets/Profile2.png';
import Profile3 from '../Assets/Profile3.png';
import Profile4 from '../Assets/Profile4.png';
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
          Frontend-Developer of Tocook
          </p>
        </div>
        <div className="home-image-section">
          <img src={Profile1} alt="" />
        </div>
      </div>
    </div>
    
    <div className="home-container">

      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading2">
          PARVADAESH S
          </h1>
          <p className="primary-text">
          Backend-Developer of Tocook
          </p>
        </div>
        <div className="home-image-section">
          <img src={Profile2} alt="" />
        </div>
      </div>
    </div>
    <div className="home-container">

      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading2">
          DHANA SEKAR V
          </h1>
          <p className="primary-text">
          Backend-Developer of Tocook
          </p>
        </div>
        <div className="home-image-section">
          <img src={Profile3} alt="" />
        </div>
      </div>
    </div>
    <div className="home-container">

      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading2">
          NAVEEN R
          </h1>
          <p className="primary-text">
          Team Memeber
          </p>
        </div>
        <div className="home-image-section">
          <img src={Profile4} alt="" />
        </div>
      </div>
    </div>
      </div>
  );
};

export default About;
