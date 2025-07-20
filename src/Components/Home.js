import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import "./Home.css";


function Home() {
  return (
    <>
      <div className="App-start">
        <div className="Name">
          <h1 className="hello">Hello,</h1>
          <h1 className="hello">I'm Pradeep Prajapati</h1>
          <ReactTyped
            className="typed"
            strings={[
              "Software Engineer ",
              "Programmer",
              "Data Analyst ",
              "Cybersecurity Expert",
              "Web Developer ",
              "Full Stack Developer ",
              "Database development",
            ]}
            typeSpeed={70}
            backSpeed={100}
            loop
          />
          
        </div>

        <div className="Top-Image"></div>
        
          
        <div className="button-container">
          <Link to="/about" className="cta"><button > 
          Learn More About Me
            </button></Link>
        </div>
      </div>
    </>
  );
}

export default Home;
