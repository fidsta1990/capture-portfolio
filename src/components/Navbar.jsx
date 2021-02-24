import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          </li>
          <li>
            <Link to="/work" href="#">
              2. Our Work
            </Link>
          </li>
          <li>
            <Link to="/contact" href="#">
              3. Contact Us
            </Link>
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

  .nav-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin: auto;
    width: 90vw;
  }

  a {
    color: #fff;
  }

  ul {
    list-style: none;
    display: flex;
  }

  #logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Navbar;
