import React, { useState, useEffect } from "react";
import { MovieState } from "../movieState";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((movie) => movie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <motion.div
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <Details>
            <Headline>
              <h2>{movie.title}</h2>
              <img src={movie.mainImg} alt={movie.title} />
            </Headline>
            <Awards>
              {movie.awards.map((award, index) => {
                return <Award key={index} {...award} />;
              })}
            </Awards>
            <ImageDisplay>
              <img src={movie.secondaryImg} alt="movie two" />
            </ImageDisplay>
          </Details>
        </motion.div>
      )}
    </>
  );
};

const Details = styled.div`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;

    @media (max-width: 1500px) {
      margin-top: 2rem;
    }
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1500px) {
    display: block;
    margin: 2rem;
  }
`;
const AwardStyle = styled.div`
  padding: 5rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }

  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 100vh;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

// AWARD COMPONENT
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};
export default MovieDetail;
