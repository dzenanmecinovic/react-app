import React, { useEffect, useState } from "react";
import PersonCard from "../../components/Cards/PersonCard/PersonCard";
import persons from "../../common/persons.json";
import "./About-Us.css";
import { BASE_URL } from "../../config/api";
import axios from "axios";

export default function AboutUs() {
  const token = localStorage.getItem("token");
  const [korisnici, setKorisnici] = useState([]);

  async function getUsers() {
    try {
      const users = await axios.get(`${BASE_URL}/users`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const usersData = await users.data;
      setKorisnici(usersData);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!Array.isArray(korisnici)) {
    return <p>Nije validan format</p>;
  }

  return (
    <div className="about-us-container">
      {korisnici.map((user) => (
        <PersonCard
          id={user.id}
          imgUrl={user.imgUrl}
          name={user.name}
          residency={user.residency}
          desc={user.desc}
        />
      ))}
    </div>
  );
}
