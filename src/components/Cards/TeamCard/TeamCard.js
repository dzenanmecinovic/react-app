import React from "react";
import "./TeamCard.css";
// import { BASE_URL } from "../../../App";

function TeamCard({ name, matches, points, deleteTeam }) {
  // console.log({ BASE_URL }); radi primera
  return (
    <div className="cardContainer2">
      <div className="card2">
        <p className="teamP">{name}</p>
        <p className="teamP">Broj odigranih meceva: {matches}</p>
        <p className="teamP">Broj poena: {points}</p>
        <button id="deleteTeam" onClick={deleteTeam}>
          Izbrisi tim
        </button>
      </div>
    </div>
  );
}

export default TeamCard;
