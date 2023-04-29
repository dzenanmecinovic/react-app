import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, handlePageClick, totalPages }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((pageNumber) => (
        <li
          key={pageNumber}
          className={`page-item ${currentPage === pageNumber ? "active" : ""}`}
        >
          <button
            className={`page-link ${
              currentPage === pageNumber ? "active" : ""
            }`}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
