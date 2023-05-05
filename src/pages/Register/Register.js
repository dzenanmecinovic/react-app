import { useState } from "react";
import "./Register.css";
import axios from "axios";

export function Register() {
  const [errorMsg, setErrorMsg] = useState("");

  async function RegSystem(data) {
    try {
      const reg = await axios.post(
        "https://nit-backend.onrender.com/users",
        data
      );
      const regInfo = await reg.data;
      console.log(regInfo);
    } catch (err) {
      setErrorMsg(`${err.message}`);
    }
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick(e) {
    e.preventDefault();
    RegSystem({ name, email, password });
  }

  return (
    <div className="rCointener">
      <form>
        <h1>Register</h1>
        {errorMsg && <p id="errorMsg">{errorMsg}</p>}
        <label>Username</label>
        <input
          className="rInput"
          type="name"
          placeholder="Username"
          name="name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label>E-mail</label>
        <input
          type="email"
          className="rInput"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter Email"
          name="email"
          required
        ></input>
        <label>Password</label>
        <input
          placeholder="Enter Password"
          className="rInput"
          type="password"
          name="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button onClick={handleClick}>Register</button>
      </form>
    </div>
  );
}
