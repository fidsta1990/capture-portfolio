import React from "react";
import HomeOne from "../img/home1.png";
// Styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
//Framer motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnim } from "../animation";
import Wave from "./Wave";


const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams </span>come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          A home full of professionals that bring vibrants ideas catered to
          videography and photography.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>

      <Image>
        <motion.img
          variants={photoAnim}
          initial="hidden"
          animate="show"
          src={HomeOne}
          alt="video"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
