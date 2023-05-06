import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { BASE_URL } from "../../config/api";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigation = useNavigate();

  async function loginSystem(data) {
    try {
      const user = await axios.post(`${BASE_URL}/users/login`, data);
      const userInfo = await user.data;
      console.log(userInfo);
      localStorage.setItem("token", JSON.stringify(userInfo.token));
      navigation("/");
    } catch (err) {
      localStorage.removeItem("token");
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
        <button onClick={handleClick} id="reg">
          Login
        </button>
      </form>
    </div>
  );
}
