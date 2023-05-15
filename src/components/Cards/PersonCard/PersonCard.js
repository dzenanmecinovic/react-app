import React from "react";
import "./PersonCard.css";
import { Link } from "react-router-dom";

export default function PersonCard({
  imgUrl,
  name,
  desc,
  residency,
  email,
  deleteUser,
}) {
  return (
    <>
      <div className="pcard">
        <div className="firstPart">
          <Link to={`/aboutus/${name.replace(" ", "").toLowerCase()}`}>
            <img src={imgUrl} alt={"profile_img"} className="img" />
          </Link>
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
    </>
  );
}
