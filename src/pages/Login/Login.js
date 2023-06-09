import { useContext, useState } from "react";
import "./Login.css";
import axios from "axios";
import { BASE_URL } from "../../config/api";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

export function Login() {
  const [Msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [prikaz, setPrikaz] = useState(false);
  const navigation = useNavigate();
  const { setToken } = useContext(AppContext);
  const { setAdmin } = useContext(AppContext);

  async function loginSystem(data) {
    try {
      const user = await axios.post(`${BASE_URL}/users/login`, data);
      const userInfo = await user.data;
      console.log(userInfo);
      localStorage.setItem("token", userInfo.token);
      setToken(userInfo.token);
      setAdmin(userInfo.user.isAdmin);
      setPrikaz(true);
    } catch (err) {
      setMsg(`Greska: ${err.response.data.err}`);
      localStorage.clear();
      setToken(null);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    loginSystem({
      email,
      password,
    });
  }

  return (
    <>
      {prikaz ? (
        navigation("/")
      ) : (
        <div className="cointener">
          <form>
            <h1 id="loginHeading">Login</h1>
            <p id="msg">{Msg}</p>
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
      )}
    </>
  );
}
