import React, { useEffect, useState } from "react";
import { BASE_URL } from "../services";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("User"));
  const [cart, setCart] = useState([]);
  const URL = BASE_URL;
  let total = 0;

  useEffect(() => {
    getCart();
  });

  const getCart = async () => {
    let data = await fetch(`${URL}/cart/${user.username}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    data = await data.json();
    setCart(data);
  };
  let link = `/purchase/`;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }

  const buyAll = async () => {
    for (let i = 0; i < cart.length; i++) {
            let data = await fetch(`${URL}/purchase`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                username: user.username,
                itemId: cart[i].product_id,
              }),
            });
            data = await data.json();
            let details = JSON.parse(localStorage.getItem("User"));
            details.balance = data.newBalance;
            localStorage.setItem("User", JSON.stringify(details));
            let removeCart = await fetch(`${URL}/cart`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  username: user.username,
                  itemId: cart[i].product_id,
                }),
            });
            removeCart = await removeCart.json();
            navigate('/buy');
    }

  };

  return (
    <div className="cart">
      <div>
        {cart.map(({ _id, product_name, price, product_id }) => {
          return (
            <div className="container">
              <li key={_id} className="product">
                <h4 className="product-item">Product : {product_name}</h4>
                <h4 className="product-item">Price : {price}</h4>
                <Link to={link + product_id} className="product-buy-button">
                  Buy
                </Link>
                <br />
              </li>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Cart Total : {total}</h2>
        <button onClick={buyAll} className="">Buy All</button>
      </div>
    </div>
  );
};

export default Cart;
