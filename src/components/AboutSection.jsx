import React from "react";
import HomeOne from "../img/home1.png";

const AboutSection = () => {
  return (
    <div className="about">
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams </span>come
            </h2>
          </div>
          <div className="hide">
            <h2>true</h2>
          </div>
        </div>
        <p>
          A home full of professionals that bring vibrants ideas catered to
          videography and photography.{" "}
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={HomeOne} alt="home image one" />
      </div>
    </div>
  );
};

export default AboutSection;
