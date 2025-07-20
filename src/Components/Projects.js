import React from "react";
import Card from "./Card";
import "./Projects.css";

function Projects() {
  return (
    <>
      <div className="Pcon">
        <Card
          imgSrc="https://raw.githubusercontent.com/Pradeep-1496/WebEdit/refs/heads/main/Screenshots/WhileOn.png"
          title="Web Edit (js)"
          path="https://github.com/Pradeep-1496/WebEdit"
        />

        <Card
          imgSrc="https://raw.githubusercontent.com/Pradeep-1496/Instagram-Clone/refs/heads/main/Screenshot/Dark_home.png"
          title="Instagram Clone (html, css, js)"
          path="https://github.com/Pradeep-1496/Instagram-Clone"
        />
        <Card
          imgSrc="https://raw.githubusercontent.com/Pradeep-1496/Human_Activity_Model/refs/heads/main/runs/detect/predict/19.jpg"
          title="Human Activity Recognition With Voice Output (ML)"
          path="https://github.com/Pradeep-1496/Human_Activity_Model"
        />
      </div>
    </>
  );
}

export default Projects;
