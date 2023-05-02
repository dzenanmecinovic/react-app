import React from "react";
import hotelsJSON from "../../common/hotels.json";
import HotelCard from "../../components/Cards/HotelCard/HotelCard";
import "./Hotels.css";

export default function Hotels() {
  return (
    <div>
      <div className="hotels">
        {hotelsJSON.map((hotel) => (
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
    </div>
  );
}
