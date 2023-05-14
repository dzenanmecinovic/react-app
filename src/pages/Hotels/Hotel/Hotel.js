import React from "react";
import { useParams } from "react-router-dom";
import hotels from "../../../common/hotels.json";
import HotelKartica from "./HotelKartica";

import "./Hotel.css";
export default function Hotel() {
  const { id } = useParams();
  const hotel = hotels.find((e) => {
    return e.id == id;
  });

  return (
    <div className="hotel-one">
      <div className="hotel-card-wrapper">
        <HotelKartica
          imageURL={hotel.imageURL}
          name={hotel.name}
          location={hotel.location}
        />
      </div>
    </div>
  );
}
