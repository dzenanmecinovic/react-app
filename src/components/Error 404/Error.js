import React from "react";
import "./Error.css";
import errror from "./errror.svg";

function Error() {
  return (
    <div className="error">
      <img src={errror} alt="logo" />
      <h1 id="notfound">Page Not Found</h1>
    </div>
  );
}

export { Error };
