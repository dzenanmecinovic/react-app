import React from "react";
import "./PersonCard.css";
import { FaGithub } from "react-icons/fa";

export default function PersonCard(props) {
  return (
    <div className="card">
      <div className="firstPart">
        <img src={props.imageURL} alt={"profile_img"} className="img" />
        <h1>{props.fullname}</h1>
        <h3>{props.location}</h3>
      </div>
      <div className="secondPart">
        <p>{props.description}</p>
        <a
          href={props.goToRepositories}
          target="blank"
          style={{ color: "darkblue" }}
          className="gitHub"
        >
          <FaGithub
            className="ikonica"
            style={{ width: "50px", height: "50px", color: "#252525" }}
          />
        </a>
      </div>
    </div>
  );
}
