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
import AboutUs from "./pages/About-Us/About-Us";
import HotelsComponent from "./pages/Hotels/Hotels";
import Hotels from "./pages/Hotels/Hotels";

export const BASE_URL = "https://api.quotable.io";

function App() {
  const [teams, setTeams] = useState(teamsJSON);
  console.log(teams);

  // Brisanje tima:
  const deleteTeam = (id) => {
    const filteredTeams = teams.filter((team) => team.id !== id);
    setTeams(filteredTeams);
  };
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(10);
  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const getQuotes = async (page) => {
    const getQuotes = await fetch(`${BASE_URL}/quotes?page=${page}`);
    const data = await getQuotes.json();
    const results = data.results;

    setQuotes(results);
  };

  useEffect(() => {
    getQuotes(10);
  }, [page]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/booking" element={<Hotels />} />
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
            <>
              <div className="quote-container">
                {quotes.map((quote) => (
                  <QuoteCard author={quote.author} content={quote.content} />
                ))}
              </div>
              <div>
                <Pagination
                  currentPage={page}
                  handlePageClick={handlePageClick}
                />
              </div>
            </>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
