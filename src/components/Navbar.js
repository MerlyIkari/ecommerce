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
            <Link to="/">
              <i className="icon-conf fa fa-home">
              </i>
              </Link>
            </li>
            {context.usuarioActual ? (
              <>
                <li>
                  <Link to="/profile">
                    <i className=" fa fa-user-check"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/productos">
                    <i className="icon-conf fa fa-box-open"></i>
                  </Link>
                </li>
                
                {/* <li>
                  <Link to="/crear"></Link>
                </li> */}
                <li>
              <Link to="/cart">
              <i className="icon-conf fas fa-shopping-cart"></i>
              <span className="notif"> 
                {context2.cartItems.length===0 ? "": context2.cartItems.length}
              </span>
              </Link>
            </li>
            <li>
                  <Link to="/logout">
                    <i className="icon-conf fa fa-sign-out-alt"></i>
                  </Link>
                </li>
                
              </>
            ) : (
              <>
                <li>
                <Link to="/login">
                  <i className = "icon-conf fas fa-user-lock">
                  </i>
                  </Link>
                </li>
                <li>
                <Link to="/signup">
                  <i className = "icon-conf fas fa-user-plus">
                  </i>
                  </Link>
                </li>
                <li>
              <Link to="/cart">
              <i className="icon-conf fas fa-shopping-cart"></i>
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