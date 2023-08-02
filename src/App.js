import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import Product from "./components/Product";
import User from "./components/User";
import Purchase from "./components/Purchase";
import Buy from "./components/Buy";
import AddBalance from "./components/AddBalance";
import PrivateComponent from "./components/PrivateComponent";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/users/user/:id" element={<User />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/add-balance" element={<AddBalance />} />
            <Route path="/purchase/:id" element={<Purchase />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/cart/:id" element={<Cart />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
