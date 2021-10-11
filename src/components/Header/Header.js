import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
   const { user, handleLogout } = useAuth();
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
            {user.email && <span>{user.displayName}</span>}
            {user.email ? (
               <button onClick={handleLogout}>Logout</button>
            ) : (
               <NavLink
                  className="nav_item"
                  activeClassName="selected"
                  to="/login"
               >
                  Login
               </NavLink>
            )}
         </nav>
      </div>
   );
};

export default Header;
