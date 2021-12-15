import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from '../views/Home';
import Signup from '../views/Signup';
import Login from '../views/Login';
import Productos from '../views/Productos';
import Navbar from '../components/Navbar';
import Cart from '../views/Cart';



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
        </Switch>
    </Router>
    );  
    
}
