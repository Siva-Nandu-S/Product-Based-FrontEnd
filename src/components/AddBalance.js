import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { BASE_URL } from "../services";

const AddBalance = () => {
  const user = JSON.parse(localStorage.getItem("User"));

  const [amount, setamount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const URL = BASE_URL;

  const addBalance = async () => {
    if (user.password === password) {
      let details = {
        amount: Number(amount),
        balance: user.balance,
      };
      console.log(details);
      let data = await fetch(`${URL}/users/${user.username}`, {
        method: "PUT",
        headers: {"content-type": "application/json" },
        body: JSON.stringify(details),
      });
      data = await data.json();
      user.balance = data.newBalance;
      localStorage.setItem("User", JSON.stringify(user));
      navigate('/');
    } else {
      window.alert("Incorrect Password");
    }
  };

  return (
    <div className="add-balance">
      <h1>Add Balance</h1>
      <input
        type="number"
        className="add-balance-input"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setamount(e.target.value)}
      />
      <input
        type="password"
        className="add-balance-input"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={addBalance}>ADD</button>
    </div>
  );
};

export default AddBalance;
