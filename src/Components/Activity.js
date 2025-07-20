import React from "react";
import Card from "./Card";
import "./Projects.css";

function Projects() {
  return (
    <div className="Pcon">
      <Card
        imgSrc="https://raw.githubusercontent.com/Pradeep-1496/Certificates/refs/heads/main/LUE_DSA.png"
        title="DSA"
        path="https://raw.githubusercontent.com/Pradeep-1496/Certificates/refs/heads/main/LUE_DSA.png"
      />
      <Card
        imgSrc="https://raw.githubusercontent.com/Pradeep-1496/Certificates/refs/heads/main/LUE_ZomatoAPI.png"
        title="Backend API"
        path="https://raw.githubusercontent.com/Pradeep-1496/Certificates/refs/heads/main/LUE_ZomatoAPI.png"
      />
      <Card
        imgSrc="https://raw.githubusercontent.com/Pradeep-1496/Certificates/refs/heads/main/DATA_VISUALIZATION.jpg"
        title="Data Visualization"
        path="https://raw.githubusercontent.com/Pradeep-1496/Certificates/refs/heads/main/DATA_VISUALIZATION.jpg"
      />

      <Card
        imgSrc="https://raw.githubusercontent.com/Pradeep-1496/Certificates/refs/heads/main/Django.png"
        title="Django"
        path="https://raw.githubusercontent.com/Pradeep-1496/Certificates/refs/heads/main/Django.png"
      />
      <Card
        imgSrc="https://raw.githubusercontent.com/Pradeep-1496/Certificates/refs/heads/main/ETHICAL_HACKING.jpg"
        title="Ethical Hacking"
        path="https://raw.githubusercontent.com/Pradeep-1496/Certificates/refs/heads/main/ETHICAL_HACKING.jpg"
      />
    </div>
  );
}

export default Projects;
