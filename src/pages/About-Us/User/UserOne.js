import React from "react";
import "./User.css";

export default function UserOne(props) {
  return (
    <div>
      <div className="user-first">
        <img src={props.imgUrl} alt="user"></img>
        <h3 id="residency">{props.name}</h3>
      </div>
      <div className="user-second">
        <p>{props.residency}</p>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
