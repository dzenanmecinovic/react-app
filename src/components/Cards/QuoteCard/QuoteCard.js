import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({ author, content }) => {
  return (
    <div className="quote-container">
      <div className="qcard">
        <div className="qcard-body">
          <h5 className="qcard-title">{author}</h5>
          <p className="qcard-text">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
