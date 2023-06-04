import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BASE_URL } from "../services";

const Product = () => {
  const id = useParams();
  const URL = BASE_URL;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  });

  const getProduct = async () => {
    let data = await fetch(`${URL}/products/product/${id.id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    data = await data.json();
    setProduct(data);
  };

  let link = `/purchase/`;

  return (
    <div className="product-container">
      <h1>{product.name}</h1>
      <h4>Price : {product.price}</h4>
      <h4>Remaining Stock : {product.stock}</h4>
      <Link to={link + id.id} className="product-buy-button">Buy</Link>
    </div>
  );
};

export default Product;
