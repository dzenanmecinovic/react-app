import React, { useEffect, useState } from "react";
import PersonCard from "../../components/Cards/PersonCard/PersonCard";
import persons from "../../common/persons.json";
import "./About-Us.css";
import { BASE_URL } from "../../config/api";
import axios from "axios";

export default function AboutUs() {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const users = await axios.get(`${BASE_URL}/users`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const usersData = await users.data;
      console.log(token);
      console.log(usersData);
    } catch (err) {
      console.log(err);
      console.log(token);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="about-us-container">
      {persons.map((person) => (
        <PersonCard
          key={person.id}
          imageURL={person.imageURL}
          fullName={person.fullName}
          location={person.location}
          description={person.description}
          goToRepositories={person.goToRepositories}
        />
      ))}
    </div>
  );
}
