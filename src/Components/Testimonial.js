import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div id="test" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        "Foodie has changed the way I order food! The meals are always fresh, delivered quickly, 
        and there’s such a great variety.
It's my go-to app for all cravings!"
        — Sarah J.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="MyProfilePic" />
        <p>
        "Foodie has completely transformed my food ordering experience! The meals are always fresh, delivered quickly, and there's a wide variety to choose from. It's my go-to app for every craving!"
        ⭐⭐⭐⭐⭐ 
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Aadesh_Pawar</h2>
      </div>
    </div>
  );
};

export default Testimonial;
