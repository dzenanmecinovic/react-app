import React, { useEffect, useState } from "react";
import "./TeamCard.css";

function TeamCard({
  name,
  matches,
  points,
  deleteTeam,
  extended,
  setExtended,
  information,
  id,
}) {
  const [closed, setClosed] = useState(true);
  useEffect(() => {
    if (extended !== null && extended !== id) {
      setClosed(true);
    }
  }, [extended]);
  useEffect(() => {
    if (!closed) {
      setExtended(id);
    } else {
      setExtended(null);
    }
  }, [closed]);

  return (
    <div className="cardContainer2">
      <div className="card2">
        <p className="teamP">{name}</p>
        <p className="teamP">Broj odigranih meceva: {matches}</p>
        <p className="teamP">Broj poena: {points}</p>
        <button id="deleteTeam" onClick={deleteTeam}>
          Izbrisi tim
        </button>
        <button
          id="info"
          onClick={() => {
            setClosed(!closed);
          }}
        >
          {closed ? <span>Prikazi vise</span> : <span>Prikazi manje</span>}
        </button>
      </div>
      {!closed && (
        <div className="info">
          <p>{information}</p>
        </div>
      )}
    </div>
  );
}

export default TeamCard;
