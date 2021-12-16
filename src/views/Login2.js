import React from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
import { useHistory } from "react-router";
import { useUserContext } from "../context/userContext";

export default function Login() {
  const history = useHistory();
  const context = useUserContext();
  
  const login = (datos) => {
    axios
      .post("https://ecomerce-master.herokuapp.com/api/v1/login", datos)
      .then((response) => {
        window.localStorage.setItem("token", response.data.tokenAdmin);
        const config = {
          headers: {
            Authorization: `JWT ${response.data.token}`,
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
  const { inputs, handleInput, handleSubmit } = useForm(login, {});
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Ingresa tu email"
            onChange={handleInput}
            value={inputs.email}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            onChange={handleInput}
            value={inputs.password}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
