import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

// animation
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";

const OurWork = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Work>
        <Movie>
          <h2>The Athlete</h2>
          <div className="line"></div>
          <Link to="/work/the-athlete">
            <img src={athlete} alt="athlete" />
          </Link>
        </Movie>
        <Movie>
          <h2>The Racer</h2>
          <div className="line"></div>
          <Link to="/work/the-racer">
            <img src={theracer} alt="the racer" />
          </Link>
        </Movie>
        <Movie>
          <h2> Good Times</h2>
          <div className="line"></div>
          <Link to="/work/good-times">
            <img src={goodtimes} alt="goodtimes" />
          </Link>
        </Movie>
      </Work>
    </motion.div>
  );
};

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  width: 90vw;
  margin: auto;
  padding: 5rem 0;

  h2 {
    padding: 1rem 0;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    /* width: 100%; */
    background: #fff;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export default OurWork;
