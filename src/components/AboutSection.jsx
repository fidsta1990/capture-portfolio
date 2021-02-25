import React from "react";
import HomeOne from "../img/home1.png";
// Styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
//Framer motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams </span>come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true</motion.h2>
          </Hide>
        </motion.div>
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
