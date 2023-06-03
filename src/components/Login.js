import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../services";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const URL = BASE_URL;

  const loginData = async () => {
    let data = await fetch(`${URL}/users/${username}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    data = await data.json();
    if(data === null){
      window.alert("Wrong username");
      navigate("/login");
    }

    if (data[0].password !== password) {
      window.alert("Invalid password");
      navigate("/login");
    } else {
      localStorage.setItem("User", JSON.stringify(data[0]));
      navigate("/");
      window.location.reload(false);
    }
  };

  return (
    <div className="register">
      <h1>Login</h1>
      <input
        type="text"
        className="login-input"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="login-input"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <a href="/sign-up">Doesn't have an account ?</a>
      <button onClick={loginData} className="login-button" type="button">
        Submit
      </button>
    </div>
  );
};

export default Login;
