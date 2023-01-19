import { useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import "./Header.scss";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";


const Logo = (
  <div className="logo">    
    <div>
      <Link to="/">
      <h2>
          Gaia<span>Piedras</span>.
        </h2>
      </Link>
    </div>
  </div>
);

const Cart = (
  <span className="cart">
    <Link to="/cart">
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

const ActiveLink =( {isActive}) =>  (isActive ? "active" : "")


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
          <nav className={showMenu ? "show-nav" : "hide-nav"}>
            <div
              className={showMenu ? "nav-wrapper" : "show-nav-wrapper"}
              onClick={hideMenu}
            ></div>

            <ul onClick={hideMenu}>
              <li  className="logo-mobile">
              {Logo}
              <FaTimes size= {22} color= "black" onClick={hideMenu}/>
              </li>
      
              <li>
                <NavLink to= "/" className= {ActiveLink}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/contact"  className= {ActiveLink}>Contact Us</NavLink>
              </li>
            </ul>
            <div className="header-right" onClick={hideMenu}>
              <span className="links">
                <NavLink to="/Login" className= {ActiveLink}>Login</NavLink>
                <NavLink to="/register"  className= {ActiveLink}>Register</NavLink>
                <NavLink to="/order-history"  className= {ActiveLink}>My Order</NavLink>
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
