import React from "react";
import HomeOne from "../img/home1.png";
// Styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams </span>come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
        <p>
          A home full of professionals that bring vibrants ideas catered to
          videography and photography.
        </p>
        <button>Contact Us</button>
      </Description>

      <Image>
        <img src={HomeOne} alt="video" />
      </Image>
    </About>
  );
};



export default AboutSection;
