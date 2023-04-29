import React, { useState } from "react";
import teamsJSON from "../../common/teams.json";
import TeamCard from "../../components/Cards/TeamCard/TeamCard";
import "./League.css";

export default function League() {
  const [teams, setTeams] = useState(teamsJSON);
  console.log(teams);

  const deleteTeam = (id) => {
    const filteredTeams = teams.filter((team) => team.id !== id);
    setTeams(filteredTeams);
  };
  return (
    <>
      <h1 id="tabela">Table</h1>
      <div className="league">
        {teams.map((team) => (
          <TeamCard
            key={team.id}
            name={team.name}
            matches={team.matches}
            points={team.points}
            deleteTeam={() => deleteTeam(team.id)}
          />
        ))}
      </div>
    </>
  );
}
