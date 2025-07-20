/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./card.css";

function Card({ imgSrc, title, path }) {
  return (
    <div className="ConPage">
      <div className="Outer">
        <img className="inimg" src={imgSrc} alt="img" />
        <div className="txt"> {title}</div>
        <button className="inbtn">
          <a
            className="btn"
            href={path}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </button>
      </div>
    </div>
  );
}

export default Card;
