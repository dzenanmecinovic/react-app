import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import UserOne from "./UserOne";
import { AppContext } from "../../../context/AppContext";

export default function User() {
  const { id } = useParams();
  const { data } = useContext(AppContext);
  const user = data.find((e) => {
    return e.id == id;
  });

  return (
    <div className="user-one">
      <div className="user-one-wrapper">
        <UserOne
          desc={user.desc}
          imgUrl={user.imgUrl}
          name={user.name}
          residency={user.residency}
        />
      </div>
    </div>
  );
}
