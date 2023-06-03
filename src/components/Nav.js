import React from "react";
import { Link } from "react-router-dom";
import { FRONT_URL } from "../services";

const Nav = () => {
  var auth = JSON.parse(localStorage.getItem("User"));
  const F_URL = FRONT_URL;
  const Logout = () => {
    localStorage.removeItem("User");
    window.location.reload(false);
  };

  let link = `${F_URL}/users/user/`;

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
              <a href={link + auth.username}>{auth.name}</a>
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
