import React, { createContext, useState } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [token, setToken] = useState(null);
  const [niz, setNiz] = useState([]);
  const values = {
    token,
    setToken,
    niz,
    setNiz,
  };

  return (
    <>
      <AppContext.Provider value={values}>{children}</AppContext.Provider>
    </>
  );
}

export { AppContext, ContextProvider };
