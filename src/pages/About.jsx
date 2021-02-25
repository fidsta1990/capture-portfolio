import React from "react";
import AboutSec from "../components/AboutSection";
import ServicesSec from "../components/ServicesSection";
import FaqSec from "../components/FaqSection";
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <motion.div
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <AboutSec />
        <ServicesSec />
        <FaqSec />
      </motion.div>
    </div>
  );
};

export default About;
