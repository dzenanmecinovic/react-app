import React from "react";
import "./PersonCard.css";
import { FaGithub } from "react-icons/fa";

export default function PersonCard(props) {
  return (
    <div className="card">
      <div className="firstPart">
        <img src={props.imageURL} alt={"profile_img"} className="img" />
        <h3>{props.fullName}</h3>
        <h3>{props.location}</h3>
      </div>
      <div className="secondPart">
        <p>{props.description}</p>
        <a href={props.goToRepositories} target="blank" className="gitHub">
          <FaGithub
            className="ikonica"
            style={{ width: "60px", height: "60px", color: "#252525" }}
          />
        </a>
      </div>
    </div>
  );
}
