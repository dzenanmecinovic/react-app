import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserOne from "./UserOne";
import { BASE_URL } from "../../../config/api";
import { AppContext } from "../../../context/AppContext";
import axios from "axios";

export default function User() {
  const { id } = useParams();
  const { data, setData } = useContext(AppContext);

  async function getData() {
    try {
      const users = await axios.get(`${BASE_URL}/users`);
      const usersData = await users.data;
      const nizObjekata = Object.values(usersData).flat();
      setData(nizObjekata.slice(1, 5));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);
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
