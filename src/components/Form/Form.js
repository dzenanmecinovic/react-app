import React, { useState } from "react";
import "./Form.css";

function Form() {
  // 1. nacin - za svako input polje poseban state
  // const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [hobby, setHobby] = useState("");
  // const [phone, setPhone] = useState("+381");

  // 2. jedan state za sva input polja
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="formContainer">
      <h3>Login</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userInput);
        }}
      >
        <label htmlFor="email">Unesite vasu email adresu</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={userInput.email}
          onChange={(e) => {
            setUserInput((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
        />
        <br />
        <br />

        <label htmlFor="password">Unesite password</label>
        <input
          type="password"
          id="pass"
          name="pass"
          value={userInput.password}
          onChange={(e) => {
            setUserInput((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
        />
        <br />
        <br />
        <button type="submit">Potvrdi</button>
      </form>
    </div>
  );
}

export default Form;
