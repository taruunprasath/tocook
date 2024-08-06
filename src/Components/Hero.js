import React from 'react'
import '../App.css';
import BannerBackground from '../Assets/home-background.png';
import BannerImage from '../Assets/food.png';
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/biriyani.png';
import Image1 from '../Assets/south-food.png';
import Trend from './Trend';
import Footer from './Footer';

const Hero = () => {
  return (
    <div>
        <div className="home-container">

      <div className="home-banner-container">
      <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Latest Stories from the Kitchen
          </h1>
          <p className="primary-text">
          Step Inside and Uncover a Treasury of Recipes, Tips, and Culinary Inspiration.
          </p>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
    <div className="home-container">

    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        A balanced diet includes a variety of nutrients in appropriate proportions, emphasizing moderation and choosing nutrient-dense foods. 
        Hydration is also crucial. Individualized dietary approaches, considering factors like age and activity level, contribute to overall well-being.
        </p>
        </div>
        </div>
    </div>
    <div className="home-container">

      <div className="home-banner-container">
      <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Why Us?
          </h1>
          <p className="primary-text">
          Our websitte customer can get a clear ingredient quantities, step-by-step instructions with cooking details, nutritional information per serving, suggestions for substitutions, and engaging visuals. 
          Enhance user experience with high-quality images or videos, fostering a sense of community through features like reviews and comments.
          </p>
        </div>
        <div className="home-image-section">
          <img src={Image1} alt="" />
        </div>
      </div>
    </div>
      <span>
      <Trend />
      </span>
     <Footer />
    </div>
  )
}

export default Hero
