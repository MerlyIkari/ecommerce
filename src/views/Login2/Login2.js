import React from "react";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { useHistory } from "react-router";
import { useUserContext } from "../../context/userContext";
import './login2.css'

export default function Login() {
  const history = useHistory();
  const context = useUserContext();
  
  const login2 = (datos) => {
    axios
      .post("https://ecomerce-master.herokuapp.com/api/v1/login", datos)
      .then((response) => {
        window.localStorage.setItem("token", response.data.tokenAdmin);
        const config = {
          headers: {
            Authorization: `JWT ${response.data.tokenAdmin}`,
          },
        };
        axios
          .get("https://ecomerce-master.herokuapp.com/api/v1/user/me", config)
          .then((response) => {
            if (response.status === 200) {
              context.setUsuarioActual(response.data);
            }
          });
        
        history.push("/crear");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Al useform le enviamos la función que se va a ejecutar en el submit
  //En este caso es la función que hará la petición para hacer login
  const { inputs, handleInput, handleSubmit } = useForm(login2, {});
  return (
    <div className = "login">
      <h1>Inicio de Sesión para Administradores</h1>
      <form onSubmit={handleSubmit}>
        <div className="label--group">
          <label htmlFor="email">Correo</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Ingresa tu email"
            onChange={handleInput}
            value={inputs.email}
            required
          />
        </div>
        <div className="label--group">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            onChange={handleInput}
            value={inputs.password}
            required
          />
        </div>
        <button type="submit" className = "btn btn-login">Login</button>
      </form>
    </div>
  );
}
