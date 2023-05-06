import { useState } from "react";
import "./Register.css";
import axios from "axios";
import { BASE_URL } from "../../config/api";

export function Register() {
  const [Msg, setMsg] = useState("");
  const [incorrectStyles, setIncorrectStyles] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const colorMessage = incorrectStyles ? "red" : "green";
  async function RegSystem(data) {
    try {
      const reg = await axios.post(`${BASE_URL}/users`, data);
      const regInfo = await reg.data;
      console.log(regInfo);
      setIsSuccess(true);
      setIncorrectStyles(false);
      setMsg("Uspesno ste se registrovali !");
    } catch (err) {
      setIsSuccess(false);
      setIncorrectStyles(true);
      setMsg(`Greska: ${err.response.data.err}`);
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
      {isSuccess ? (
        <p
          style={{
            fontSize: "2.5rem",
            textAlign: "center",
            color: colorMessage,
            textShadow: "0 0 15px #252525",
          }}
        >
          {Msg}
        </p>
      ) : (
        <form>
          <h1>Register</h1>
          <p
            style={{
              textAlign: "center",
              color: colorMessage,
              textShadow: "0 0 15px #252525",
            }}
          >
            {Msg}
          </p>
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
          <button onClick={handleClick} id="reg">
            Register
          </button>
        </form>
      )}
    </div>
  );
}
