import React from 'react';
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom';
import Home from '../views/Home';
import Signup from '../views/Signup';
import Login from '../views/Login';
import Profile from '../views/Profile/Profile';
import Crear from "../views/Crear/Crear";
import Login2 from "../views/Login2/Login2";
import Productos from '../views/Productos/Productos';
import Navbar from '../components/Navbar';
import Cart from '../views/Cart';
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
            <Route exact path="/productos" component={Productos} />
            {/*<Route exact path="/logout" component={Home} />*/}
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/crear" component={Crear}   />
            <Route exact path="/login2" component={Login2} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/profile" component={Profile} />

        </Switch>
    </Router>
    );  
    
}
