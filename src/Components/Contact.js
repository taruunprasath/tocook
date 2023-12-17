import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Your Name"/>
        </div>
        <div className="contact-form-container">
        <input type="text" placeholder="Your Message"/>
        </div>
        <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        </div>
        <div className="contact-page-wrapper">
        <button className="secondary-button">Submit</button>
      </div>
    </div>
    
  );
};

export default Contact;
