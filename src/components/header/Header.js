import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.scss";
import { FiShoppingCart } from "react-icons/fi";

const Logo = (
  <div className="logo">
    <div>
      <Link to="/">
        <h2>
          G <span>aia</span>.
        </h2>
      </Link>
    </div>
  </div>
);

const Header = () => {
  return (
    <>
      <header className="Header">
        {Logo}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>

          </ul>
          <div className="[header-right]">
            <span className="links">
            <Link to= "/Login">Login</Link>
            <Link to= "/register">Register</Link>
            <Link to= "/order">My Order</Link>
            </span>
            <span className= "cart">
            <Link to= "/cart">
              Cart 

              <FiShoppingCart size={20}/>
            </Link>

            </span>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
