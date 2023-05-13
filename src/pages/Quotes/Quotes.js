import React, { useEffect, useState } from "react";
import QuoteCard from "../../components/Cards/QuoteCard/QuoteCard";
import Pagination from "../../components/Pagination/Pagination";
import "./Quotes.css";
import { BASE_URL } from "../../App";
import Spinner from "../../components/Spinner/Spinner";

export default function Quotes() {
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
  };

  useEffect(() => {
    getQuotes();
  });
  return (
    <>
      {quotes > 0 ? (
        <div>
          <div className="quote-container">
            {quotes.map((quote) => (
              <QuoteCard author={quote.author} content={quote.content} />
            ))}
          </div>
          <Pagination
            currentPage={page}
            handlePageClick={handlePageClick}
            totalPages={15}
          />
        </div>
      ) : (
        <Spinner message={"Prikupljanje citata..."} />
      )}
    </>
  );
}
