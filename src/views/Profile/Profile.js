import React from "react";
import withProtection from "../utils/withProtection";
import { useUserContext } from "../context/userContext";
const Profile = () => {
  const context = useUserContext();
  return (
    <div>
      <h1>Mi perfil</h1>
      {context.usuarioActual ? (
        <>
          <p>Nombre: {context.usuarioActual.user.first_name}</p>
          <p>Apellido: {context.usuarioActual.user.last_name}</p>
          <p>Apellido: {context.usuarioActual.user.birth_date}</p>
          <p>Apellido: {context.usuarioActual.user.email}</p>
        </>
      ) : (
        <p>No puedes acceder a esta info</p>
      )}
    </div>
  );
};

export default withProtection(Profile);