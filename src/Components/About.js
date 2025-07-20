// src/AboutMe.js
import React from "react";
import { Link } from "react-router-dom";
import model1 from "../Image/model.png";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <img
          // src="https://picsum.photos/200/200"
          src={model1}
          alt="Profile_Picture"
          className="profile-image"
        />
        <div className="about-me-text">
          <h1>About Me</h1>
          <p id="abTxt">
            Hello! I’m Pradeep, an IT Engineer currently in final year of a
            BTech program, with a deep passion for technology and
            problem-solving. My journey in the tech world has equipped me with a
            broad skill set and a keen interest in various domains within IT.
          </p>
          <p id="abTxt">
            As a <strong>Programmer</strong>, I thrive on writing clean,
            efficient code and solving complex problems. My enthusiasm extends
            to <strong>Developing</strong>, where I leverage data to uncover
            insights and drive decision-making.
          </p>
          <p id="abTxt">
            I’m excited to continue growing my skills and exploring new
            technologies, always eager to take on new challenges and contribute
            to innovative projects. Feel free to reach out if you’d like to
            connect or learn more about my work!
          </p>
        </div>
        <div className="Abutton-container">
          <button>
            {" "}
            <Link to="/projects" className="contact-button">
              My Works
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
