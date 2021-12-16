import React, { useState } from "react";
import { Redirect } from "react-router-dom";


export default function withProtectionAdmin(Component) {
  //Verificamos si tenemos un token. Si no lo tenemos no mostramos el componente
  const ProtectedComponent2 = (props) => {
    const [tokenAdmin] = useState(window.localStorage.getItem("tokenAdmin"));

    return tokenAdmin ? <Component {...props} /> : <Redirect to="/login2" />;
  };
  return ProtectedComponent2;
}