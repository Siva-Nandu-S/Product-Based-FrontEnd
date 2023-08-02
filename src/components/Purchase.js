import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { BASE_URL} from "../services";

const Purchase = () => {
  const id = useParams();
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("User"));
  const URL = BASE_URL;

  const [details, setDetails] = useState("");

  useEffect(() => {
    purchase();
  });

  const props = {
    username: user.username,
    itemId: id.id,
  };

  const purchase = async () => {
    console.log("purchase");
    let data = await fetch(`${URL}/purchase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });
    data = await data.json();
    console.log(data);
    setDetails(data);
  };

  const buyProduct = async () => {
    let data = await fetch(`${URL}/purchase`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        itemId: id.id,
      }),
    });
    data = await data.json();
    let details = JSON.parse(localStorage.getItem("User"));
    details.balance = data.newBalance;
    localStorage.setItem("User", JSON.stringify(details));
    navigate(`/buy`);
  };

  return (
    <div className="purchase-container">
      <h1>Purchase</h1>
      <h3>Actual Price: {details.price}</h3>
      <h3>Stock: {details.stock}</h3>
      <h3>Your Balance: {details.balance}</h3>
      {details.enough_balance ? (
        <button onClick={buyProduct} className="buy-button">
          BUY
        </button>
      ) : (
        <Link to="/products">Back</Link>
      )}
    </div>
  );
};

export default Purchase;
