import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} 
from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
import Home from "../views/Home/Home";
import Signup from "../views/Signup/Signup";
import Login from "../views/Login/Login";
import Productos from "../views/Productos/Productos";

import Profile from "../views/Profile";
import Cart from "../views/Cart/Cart"
import { useUserContext } from "../context/userContext";


const Logout = () => {
  window.localStorage.removeItem("token");
  const context = useUserContext();
  context.setUsuarioActual();
  return <Redirect to="/" />;
};

export default function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/item" component={Productos} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/cart" component={Cart}/>
      </Switch>
    </Router>
  );
}
