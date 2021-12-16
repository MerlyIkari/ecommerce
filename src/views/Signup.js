import React from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
import { useHistory } from "react-router";
export default function Signup() {
  const history = useHistory();
  const registerUser = (datos) => {
    //Se hace el post a la API para registrar usuario
    //Se puede validar que la contraseña sea igual a confirmar contraseña
    axios
      .post("https://ecomerce-master.herokuapp.com/api/v1/signup", datos)
      .then((response) => {
        if (response.status === 200) {
          //activar la notificacion
          //redireccionar al login
          history.push("/login");
        } else {
          //tener una notificacion del error
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { inputs, handleInput, handleSubmit } = useForm(registerUser, {});
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="nombre">Nombre</label>
          <input
            id="first_name"
            type="text"
            name="first_name"
            placeholder="Pon tu nombre"
            onChange={handleInput}
            value={inputs.nombre}
          />
        </div>
        <div>
          <label>Apellidos</label>
          <input
            id="last_name"
            type="text"
            name="last_name"
            placeholder="Pon tu apellido"
            onChange={handleInput}
            value={inputs.apellidos}
          />
        </div>
        <div>
          <label for="birth_date">Fecha de nacimiento</label>
          <input
            id="birth_date"
            type="date"
            name="birth_date"
            onChange={handleInput}
            value={inputs.edad}
          />
        </div>
        <div>
          <label for="gender">Género</label>
          <input
            id="gender"
            type="text"
            name="gender"
            onChange={handleInput}
            value={inputs.genero}
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={handleInput}
            value={inputs.email}
          />
        </div>
        <div>
          <label for="password">Contraseña</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleInput}
            value={inputs.password}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
