import React from "react";
import { Link } from "react-router-dom";
import '../Navbar/navbar.css'
import SearchBar from "../Searchbar/Searchbar"

import { useUserContext } from "../../context/userContext";
const Navbar = () => {
  const context = useUserContext();
  return (
    <>
      <nav className="navbar">
        {/* <!-- LOGO --> */}
        <div className="logo">Tienda virtual</div>
        <SearchBar/>
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
                    Bienvenido {context.usuarioActual.user.first_name}
                  </Link>
                </li>
                <li>
                  <Link to="/item">Productos</Link>
                </li>
                <li>
                  <Link to="/logout">salir</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Inicio Sesión</Link>
                </li>
                <li>
                  <Link to="/signup">Regístrate</Link>
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
