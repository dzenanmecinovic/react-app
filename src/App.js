import React, { useEffect, useState } from "react";
import "./App.css";
// import Greeting from "./components/Greetings/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import PersonCard from "./components/Cards/PersonCard/PersonCard";
import persons from "./common/persons.json";
import hotels from "./common/hotels.json";
import teamsJSON from "./common/teams.json";
import HotelCard from "./components/Cards/HotelCard/HotelCard";
import Login from "./components/Login/Login";
import TeamCard from "./components/Cards/TeamCard/TeamCard";
import QuoteCard from "./components/Cards/QuoteCard/QuoteCard";
import Pagination from "./components/Pagination/Pagination";
import { Route, Routes } from "react-router-dom";
import { Error } from "./components/Error 404/Error";

const poruke = [
  "Danas je subota",
  "U subotu je lepo vreme",
  "Subota je dan za odmor",
  "Subota je dan za kupovinu",
  "Subota je dan za druzenje",
  "Subota je dan za kafu",
];

export const BASE_URL = "https://api.quotable.io";

function App() {
  // const [count, setCount] = React.useState(0);
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState(poruke);
  // setCount je metoda pomocu koje menjamo vrednost count state-a:
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  // const x = 10;

  const reverseArr = () => {
    const _arr = [...arr];
    const reversed = _arr.reverse();
    setArr(reversed);
  };

  const [teams, setTeams] = useState(teamsJSON);
  console.log(teams);

  // Brisanje tima:
  const deleteTeam = (id) => {
    const filteredTeams = teams.filter((team) => team.id !== id);
    setTeams(filteredTeams);
  };
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const getQuotes = async () => {
    const getQuotes = await fetch(`${BASE_URL}/quotes?page=${page}`);
    const data = await getQuotes.json();
    const results = data.results;

    setQuotes(results);
    // console.log(data);
    console.log(results);
  };

  console.log(quotes[0]?.content);

  useEffect(() => {
    getQuotes();
  }, [page]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Login />} />
        <Route
          path="/about-us"
          element={
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 250px)",
                justifyContent: "center",
                gridAutoRows: "minmax(420px, auto)",
                gridGap: "40px",
              }}
            >
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
          }
        />
        <Route
          path="/booking"
          element={
            <div className="hotels">
              {hotels.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  imageURL={hotel.imageURL}
                  name={hotel.name}
                  stars={hotel.stars}
                  description={hotel.description}
                  rating={hotel.rating}
                  reviews={hotel.reviews}
                />
              ))}
            </div>
          }
        />
        <Route
          path="/league"
          element={
            <>
              <h2
                style={{
                  textAlign: "center",
                  paddingTop: "5rem",
                  fontSize: "2.2rem",
                  color: "#252525",
                  textDecoration: "underline",
                }}
              >
                Table
              </h2>
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
          }
        />
        <Route
          path="/quotes"
          element={
            <div className="quote-container">
              {quotes.map((quote) => (
                <QuoteCard author={quote.author} content={quote.content} />
              ))}
            </div>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
