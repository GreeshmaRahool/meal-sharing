import React from "react";
import logo from "../assets/images/meals-logo.png";
import { BrowserRouter as Switch, Link, Router, Route } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <img className="meal-logo" src={logo} alt="logo" />
      <div>
        <ul>
          <Link to = "/">
            <li>Home</li>
          </Link>
          <Link to = "/aboutus">
            <li>About</li>
          </Link>
          <Link to = "/meals" >
            <li>Meals</li>
          </Link>
          <Link to = "/admin" >
            <li>Admin</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Navigation;
