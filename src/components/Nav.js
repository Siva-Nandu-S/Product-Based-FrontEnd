import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  var auth = JSON.parse(localStorage.getItem("User"));
  const Logout = () => {
    localStorage.removeItem("User");
    window.location.reload(false);
  };

  let link = `/users/user/`;

  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          {auth ? (
            <button onClick={Logout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        <li className="nav-profile">
          {auth ? (
            <div>
              {}
              <Link to={link + auth.username}>{auth.name}</Link>
            </div>
          ) : (
            <p></p>
          )}
        </li>
        <li className="nav-cart">
          {auth ? (
            <div>
              {}
              <Link to={"/cart/" + auth.username}>Cart</Link>
            </div>
          ) : (
            <p></p>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
