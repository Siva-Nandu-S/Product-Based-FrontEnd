import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL,FRONT_URL } from "../services";

const Product = () => {
  const id = useParams();
  const junk = "";
  const URL = BASE_URL;
  const F_URL = FRONT_URL;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  },[junk]);

  const getProduct = async () => {
    let data = await fetch(`${URL}/products/product/${id.id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    data = await data.json();
    setProduct(data);
  };

  let link = `${F_URL}/purchase/`;

  return (
    <div className="product-container">
      <h1>{product.name}</h1>
      <h4>Price : {product.price}</h4>
      <h4>Remaining Stock : {product.stock}</h4>
      <a href={link + id.id} className="product-buy-button">Buy</a>
    </div>
  );
};

export default Product;
