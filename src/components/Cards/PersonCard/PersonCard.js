import React from "react";
import "./PersonCard.css";

export default function PersonCard({
  imgUrl,
  name,
  desc,
  residency,
  email,
  deleteUser,
}) {
  return (
    <div className="pcard">
      <div className="firstPart">
        <img src={imgUrl} alt={"profile_img"} className="img" />
        <h3>{name}</h3>
        <h3>{residency}</h3>
      </div>
      <div className="secondPart">
        <p id="email">{email}</p>
        <p>{desc}</p>
        <button id="deleteUser" onClick={deleteUser}>
          delete user
        </button>
      </div>
    </div>
  );
}
