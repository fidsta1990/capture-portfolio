import React from "react";
// Styled
import styled from "styled-components";

const FaqSection = () => {
  return (
    <div className="faq">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      {/* question */}
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, placeat.
          </p>
        </div>
      </div>
      {/* question */}
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, placeat.
          </p>
        </div>
      </div>
      {/* question */}
      <div className="question">
        <h4>Daily Payments</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, placeat.
          </p>
        </div>
      </div>
      {/* question */}
      <div className="question">
        <h4>What Products Do You Offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, placeat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
