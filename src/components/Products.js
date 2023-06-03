import React, { useState, useEffect } from "react";
import { BASE_URL, FRONT_URL } from "../services";

const Products = () => {
  const [products, setProducts] = useState([]);
  const junk = "";
  const URL = BASE_URL;
  const F_URL = FRONT_URL;
  console.log(process.env.REACT_APP_BASE_URL);
  useEffect(() => {
    getProducts();
  },[junk]);

  const getProducts = async () => {
    let data = await fetch(`${URL}/products`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    data = await data.json();
    setProducts(data);
  };

  let link = `${F_URL}/products/product/`;

  return (
    <div className="products">
      <h1 className="products-h1">Products</h1>
      <ul className="products-list">
        <div>
          {products.map(({ _id, name}) => {
            return (
              <div className="container">
                <li key={_id} className="product">
                  <h4 className="product-item">{name}</h4>
                  <a href={link + _id} className="product-details-button">Details</a>
                </li>
              </div>
            );
          })}
        </div>
      </ul>
      <a href="/add-product" className="add-products-link">Add A Product ?</a>
    </div>
  );
};

export default Products;
