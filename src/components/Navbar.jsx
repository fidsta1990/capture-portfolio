import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <Nav>
      <div className="nav-wrap">
        <h1>
          <Link to="/" id="logo">
            Capture
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/" href="#">
              1. About Us
            </Link>
            <Line
              transition={{ duration: 0.5 }}
              initial={{ width: 0 }}
              animate={{ width: pathname === `/` ? "50%" : "0%" }}
            />
          </li>
          <li>
            <Link to="/work" href="#">
              2. Our Work
            </Link>
            <Line
              transition={{ duration: 0.5 }}
              initial={{ width: 0 }}
              animate={{ width: pathname === `/work` ? "50%" : "0%" }}
            />
          </li>
          <li>
            <Link to="/contact" href="#">
              3. Contact Us
            </Link>
            <Line
              transition={{ duration: 0.5 }}
              initial={{ width: 0 }}
              animate={{ width: pathname === `/contact` ? "50%" : "0%" }}
            />
          </li>
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  min-height: 10vh;
  background: #282828;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 9;

  .nav-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin: auto;
    width: 90vw;

    @media (max-width: 1300px) {
      flex-direction: column;
    }
  }

  a {
    color: #fff;
  }

  ul {
    list-style: none;
    display: flex;

    @media (max-width: 1300px) {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
  }

  #logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;
    position: relative;

    @media (max-width: 1300px) {
      padding-left: 0;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  position: absolute;
  width: 0%;
  bottom: -80%;
  left: 60%;

  @media (max-width: 1300px) {
    left: 0;
  }
`;

export default Navbar;
