import { useState } from "react";
import "./Register.css";
import axios from "axios";
import { BASE_URL } from "../../config/api";

export function Register() {
  const [Msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [prikaz, setPrikaz] = useState(false);

  async function RegSystem(data) {
    try {
      const reg = await axios.post(`${BASE_URL}/users`, data);
      const regInfo = await reg.data;
      console.log(regInfo);
      localStorage.setItem("email", data.email);
      setPrikaz(true);
    } catch (err) {
      setMsg(`Greska: ${err.response.data.err}`);
      localStorage.removeItem("email");
    }
  }

  function handleClick(e) {
    e.preventDefault();
    RegSystem({ name, email, password });
  }

  return (
    <>
      {prikaz ? (
        <p id="uspesno">Uspesno ste se registrovali!</p>
      ) : (
        <div className="rCointener">
          <form>
            <h1>Register</h1>
            <p id="msg">{Msg}</p>
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
        </div>
      )}
    </>
  );
}
