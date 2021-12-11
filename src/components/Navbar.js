import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useItemContext } from "../context/ItemContext";

const Navbar = () => {
  const context=useItemContext();
  return (
    <>
      <nav className="navbar">
        {/* <!-- LOGO --> */}
        <div className="logo">Ecommerce</div>
        {/* <!-- NAVIGATION MENU --> */}
        <ul className="nav-links">
          {/* <!-- USING CHECKBOX HACK --> */}
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          {/* <!-- NAVIGATION MENUS --> */}
          <div className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li className="services">
              <Link to="/">Servicios</Link>
              {/* <!-- DROPDOWN MENU --> */}
              <ul className="dropdown">
                <li>
                  <Link to="/">Personajes </Link>
                </li>
                <li>
                  <Link to="/">Autores</Link>
                </li>
                <li>
                  <Link to="/">Service 3</Link>
                </li>
                <li>
                  <Link to="/">Service 4</Link>
                </li>
                <li>
                  <Link to="/">Service 5</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/cart">
              <i class="fas fa-shopping-cart"></i>
              <span className="notif"> 
                {context.cartItems.length===0 ? "": context.cartItems.length}
              </span>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;