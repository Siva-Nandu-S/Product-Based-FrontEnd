import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../services";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const navigate = useNavigate();
  const URL = BASE_URL;

  const productAdd = async () => {
    let details = {
      name: name,
      price: Number(price),
      category: category,
      stock: Number(stock),
    };
    
    let product = await fetch(`${URL}/products/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
    product = await product.json();
    if (product.result === 'success') {
      navigate("/products");
    }
    if (product.status === 400) {
      window.alert("Try different username");
    }
  };

  return (
    <div className="add-product">
      <h1 className="add-product-h1">Add New Product</h1>
      <input
        type="text"
        className="add-product-item"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        className="add-product-item"
        placeholder="Enter Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        className="add-product-item"
        placeholder="Enter Product Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        className="add-product-item"
        placeholder="Enter Available Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <button onClick={productAdd} className="add-product-button" type="button">
        Submit
      </button>
    </div>
  );
};

export default AddProduct;
