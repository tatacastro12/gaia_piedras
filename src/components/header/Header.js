import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.scss";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

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

const Cart = (
  <span className="cart">
    <Link to="/cart">
      Cart
      <FiShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <header>
        <div className="header">
          {Logo}
          <nav className={showMenu ? "style.show-nav" : "hide-nav"}>
            <div
              className={showMenu ? "nav-wrapper" : "show-nav-wrapper"}
              onClick={hideMenu}
            ></div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <div className="header-right">
              <span className="links">
                <Link to="/Login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/order-history">My Order</Link>
              </span>
              {Cart}
            </div>
          </nav>
          <div className="menu-icon">
            {Cart}
            <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
