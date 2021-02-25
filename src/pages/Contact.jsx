import React from "react";
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";
import styled from "styled-components";

const Contact = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h1>Contact</h1>
    </motion.div>
  );
};

const ContactStyled = styled.div``;

export default Contact;
