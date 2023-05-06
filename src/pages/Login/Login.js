import { useState } from "react";
import "./Login.css";
import axios from "axios";

export function Login() {
  const [errorMsg, setErrorMsg] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  async function loginSystem(data) {
    try {
      const user = await axios.post(
        "https://nit-backend.onrender.com/users/login",
        data
      );
      const userInfo = await user.data;
      console.log(userInfo);
      setLoginSuccess("Uspesno ste se ulogovali !");
    } catch (err) {
      setErrorMsg(`Greska: ${err.response.data.err}`);
    }
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick(e) {
    e.preventDefault();
    loginSystem({
      email,
      password,
    });
  }

  return (
    <div className="cointener">
      <form>
        <h1 id="loginHeading">Login</h1>
        {errorMsg ? (
          <p id="errorMsg">{errorMsg}</p>
        ) : (
          <p id="successMsg">{loginSuccess}</p>
        )}
        <label className="label">Email</label>
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name="email"
          required
        ></input>
        <label className="label">Password</label>
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button id="login" onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  );
}
