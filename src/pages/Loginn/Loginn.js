import { useState } from "react";
import "./Loginn.css";
import axios from "axios";

export function Loginn() {
  async function Login(data) {
    try {
      const user = await axios.post(
        "https://nit-backend.onrender.com/users/login",
        data
      );
      const userInfo = await user.data();
      console.log(userInfo);
    } catch (err) {
      console.log(err);
    }
  }
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  function handleClick(e) {
    e.preventDefault();
    Login({
      email,
      password,
    });
  }
  return (
    <div className="cointener">
      <form>
        <h1>Login</h1>
        <label className="label">Email</label>
        <input
          className="input"
          type="email"
          value={userInput.email}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          placeholder="Email"
          name="email"
          required
        ></input>
        <label className="label">Password</label>
        <input
          className="input"
          type="password "
          name="password "
          placeholder="Password"
          required
          value={userInput.password}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        ></input>
        <button id="login" onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  );
}
