import React, { useContext, useEffect } from "react";
import PersonCard from "../../components/Cards/PersonCard/PersonCard";
import "./About-Us.css";
import { BASE_URL } from "../../config/api";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

export default function AboutUs() {
  const token = localStorage.getItem("token");
  const { niz, setNiz } = useContext(AppContext);

  const deleteUser = function (id) {
    const filtriraniUseri = niz.filter((korisnik) => korisnik.id !== id);
    setNiz(filtriraniUseri);
  };

  async function getUsers() {
    try {
      const users = await axios.get(`${BASE_URL}/users`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const usersData = await users.data;
      const nizObjekata = Object.values(usersData).flat();
      setNiz(nizObjekata.slice(1, nizObjekata.length));
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!Array.isArray(niz)) {
    return <p>Nije validan format</p>;
  }

  return (
    <div className="about-us-container">
      {niz.map((korisnik) => {
        return (
          <PersonCard
            key={korisnik.id}
            imgUrl={korisnik.imgUrl}
            name={korisnik.name}
            desc={korisnik.desc}
            residency={korisnik.residency}
            email={korisnik.email}
            deleteUser={() => deleteUser(korisnik.id)}
          />
        );
      })}
    </div>
  );
}
