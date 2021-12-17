import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useItemContext } from "../../src/context/ItemContext"
import { useUserContext } from "../../src/context/userContext";
const Navbar = () => {
  const context = useUserContext();
  const context2 = useItemContext();
  return (
    <>
      <nav className="navbar">
        {/* <!-- LOGO --> */}
        <div className="logo">Tienda virtual</div>
        {/* <!-- NAVIGATION MENU --> */}
        <ul className="nav-links">
          {/* <!-- USING CHECKBOX HACK --> */}
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          {/* <!-- NAVIGATION MENUS --> */}
          <div className="menu">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            {context.usuarioActual ? (
              <>
                <li>
                  <Link to="/profile">
                   <i className="fa fa-user-check"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/productos">Productos</Link>
                </li>
                <li>
                  <Link to="/logout">Cerrar Sesión</Link>
                </li>
                <li>
                  <Link to="/crear"></Link>
                </li>
                <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="notif"> 
                {context2.cartItems.length===0 ? "": context2.cartItems.length}
              </span>
              </Link>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Iniciar Sesión</Link>
                </li>
                <li>
                  <Link to="/signup">Regístrate</Link>
                </li>
                <li>
              <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="notif"> 
                {context2.cartItems.length===0 ? "": context2.cartItems.length}
              </span>
              </Link>
            </li>

              </>
            )}
            
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;