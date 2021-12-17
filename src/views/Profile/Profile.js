import React from "react";
import withProtection from "../../utils/withProtection";
import { useUserContext } from "../../context/userContext";
import './profile.css'
const Profile = () => {
  const context = useUserContext();
  return (
    <div className="profile">
      <h1>Bienvenido {context.usuarioActual.user.first_name}</h1>
      
      {context.usuarioActual ? (
        <>
        <div className="label--group">
          <header>NOMBRE</header>
          <h3> {context.usuarioActual.user.first_name}</h3>
          </div>
          <div className="label--group">
          <header>APELLIDO</header>
          <h3> {context.usuarioActual.user.last_name}</h3>
          </div>
          <div className="label--group">
          <header>FECHA DE NACIMIENTO</header>
          <h3> {context.usuarioActual.user.birth_date}</h3>
          </div>
          <div className="label--group">
          <header>CORREO ELECTRÓNICO</header>
          <h3>{context.usuarioActual.user.email}</h3>
          </div>
        </>
      ) : (
        <p>No puedes acceder a esta info</p>
      )}
    </div>
  );
};

export default withProtection(Profile);