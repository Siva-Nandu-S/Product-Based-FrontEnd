import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../services";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [balance, setBalance] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const junk = 0.34;
  const URL = BASE_URL;

  useEffect(() => {
    const auth = localStorage.getItem("User");
    if (auth) {
      navigate('/');
    }
  },[junk]);

  const collectData = async () => {
    console.log("Collecting data");
    let details = {
      name: name,
      username: username,
      balance: Number(balance),
      password: password
    }
    let data = await fetch(`${URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
    data = await data.json();
    console.log(data);
    if(data.result === "success"){
      navigate('/login');
    }
    if(data.status === 400){
      navigate('/sign-up');
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        className="signUp-input"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="signUp-input"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        className="signUp-input"
        placeholder="Enter Balance"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
      />
      <input
        type="password"
        className="signUp-input"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={collectData} className="signUp-button" type="button">
        Submit
      </button>
    </div>
  );
};

export default SignUp;
