import React, { useState } from "react";
import "./Login.css";

export default function Form() {
  // 1. nacin - za svako input polje poseban state
  // const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [hobby, setHobby] = useState("");
  // const [phone, setPhone] = useState("+381");

  // 2. jedan state za sva input polja
  const [userInput, setUserInput] = useState({
    username: "",
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
        <label htmlFor="username">Enter username</label>
        <input
          type="username"
          id="username"
          name="username"
          value={userInput.username}
          onChange={(e) => {
            setUserInput((prev) => ({
              ...prev,
              username: e.target.value,
            }));
          }}
        ></input>
        <label htmlFor="email">Enter email-address</label>
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
        <label htmlFor="password">Enter password </label>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
