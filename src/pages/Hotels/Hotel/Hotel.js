import React from "react";
import { useParams } from "react-router-dom";
import "./Hotel.css";

export default function Hotel() {
  const { id } = useParams();
  return <div className="hotel-one">{id}</div>;
}
