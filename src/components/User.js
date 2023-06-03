import React from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  let auth = localStorage.getItem("User");
  auth = JSON.parse(auth);

  console.log("auth : ", auth);

  const navigate = useNavigate();
  const addBalance = () => {
    navigate('/add-balance');
  };

  return (
    <div className="user-profile"> 
      <h2>{auth.name}</h2>
      <h3>Username : {auth.username}</h3>
      <h3>Balance : {auth.balance}</h3>
      <button className="add-balance-button" onClick={addBalance}>Add Balance</button>
    </div>
  );
};

export default User;