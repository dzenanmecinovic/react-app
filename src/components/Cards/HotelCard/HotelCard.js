import React from "react";
import "./HotelCard.css";
import { Link } from "react-router-dom";

export default function HotelCard(props) {
  const { id } = props;
  const oneStar = <span>⭐</span>;
  const halfStar = (
    <span style={{ color: "yellow", backgroundColor: "#252525" }}>✩</span>
  );
  const stars = (num) => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(oneStar);
    }
    if (props.stars % 1 !== 0) {
      arr.push(halfStar);
    }
    return arr;
  };

  // 5-6 => "Decent"
  // 6-7 => ""
  // 7-8 => "Good"
  // 8-9 => "Very Good"
  // 9-10 => "Wonderful"

  const slashIndex = props.rating.indexOf("/");
  const rating = +props.rating.slice(0, slashIndex);
  let reaction;
  if (rating >= 5 && rating < 6) {
    reaction = "Decent";
  } else if (rating >= 6 && rating < 7) {
    reaction = "";
  } else if (rating >= 7 && rating < 8) {
    reaction = "Good";
  } else if (rating >= 8 && rating < 9) {
    reaction = "Very Good";
  } else if (rating >= 9 && rating <= 10) {
    reaction = "Wonderful";
  }
  const showRecomendation = rating >= 8;

  return (
    <div className="hotelgrid">
      <div className="Hotelcard">
        <Link to={`/booking/${id}`}>
          <img src={props.imageURL} alt={"profile_img"} className="hotelimg" />
        </Link>
        <div>
          <p className="hotelname">{props.name}</p>
          <h3>{stars(props.stars)}</h3>
          <p className="hoteldesc">{props.description}</p>
          <p>
            <span className="hotelrat"> {props.rating} </span>
            <span style={{ color: "gray" }}>{reaction} </span>
            <span style={{ color: "gray" }}>({props.reviews} </span>)
          </p>
          {showRecomendation ? <p>Recomendation</p> : <></>}
          <button id="booking">Book</button>
        </div>
      </div>
    </div>
  );
}
