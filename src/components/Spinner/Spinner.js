import React from "react";
import "./Spinner.css";
import { MoonLoader } from "react-spinners";

export default function Spinner({ message }) {
  return (
    <div id="loader">
      <MoonLoader
        color={"#000"}
        loading={true}
        size={150}
        aria-label={message}
        data-testid="loader"
      ></MoonLoader>
    </div>
  );
}
