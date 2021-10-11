import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
   return (
      <div>
         <h2>Firebase Login Form</h2>

         <nav className="navbar">
            <NavLink className="nav_item" activeClassName="selected" to="/home">
               Home
            </NavLink>
            <NavLink className="nav_item" activeClassName="selected" to="/shop">
               Shop
            </NavLink>
            <NavLink
               className="nav_item"
               activeClassName="selected"
               to="/order"
            >
               order
            </NavLink>
            <NavLink
               className="nav_item"
               activeClassName="selected"
               to="/pricing"
            >
               Pricing
            </NavLink>
            <NavLink
               className="nav_item"
               activeClassName="selected"
               to="/about"
            >
               About
            </NavLink>
            <NavLink
               className="nav_item"
               activeClassName="selected"
               to="/login"
            >
               Login
            </NavLink>
         </nav>
      </div>
   );
};

export default Header;
