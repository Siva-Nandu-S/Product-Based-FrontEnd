import React from "react";

const Buy = () => {
    const user = JSON.parse(localStorage.getItem("User"));

  return (
    <div className="buy">
      <h1>You Bought the product</h1>
      <h2>Thank You for using our services</h2>
      <h2 className="balance">Your remaining Balance is : Rs.{user.balance}</h2>
    </div>
  );
};

export default Buy;