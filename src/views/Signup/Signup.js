import React from "react";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { useHistory } from "react-router";
import './signup.css'


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
    <div className = "signup signup--card">
      <h1>Regístrate</h1>
      <form onSubmit={handleSubmit} className="form-signup">
        <div className = "label--group">
          <label for="nombre">Nombre</label>
          <input
            id="first_name"
            type="text"
            name="first_name"
            placeholder="Escribe tu nombre"
            onChange={handleInput}
            value={inputs.nombre}
            required
          />
        </div>
        <div className = "label--group">
          <label>Apellidos</label>
          <input
            id="last_name"
            type="text"
            name="last_name"
            placeholder="Escribe tu apellido"
            onChange={handleInput}
            value={inputs.apellidos}
            required
          />
        </div>
        <div className = "label--group">
          <label for="birth_date">Fecha de nacimiento</label>
          <input
            id="birth_date"
            type="date"
            name="birth_date"
            onChange={handleInput}
            value={inputs.edad}
            required
          />
        </div>
        <div className = "label--group">
          <label for="gender">Género</label>
          <input
            id="gender"
            type="text"
            name="gender"
            onChange={handleInput}
            value={inputs.genero}
            required
            />
            
        </div>
        <div className = "label--group">
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Escribe tu correo"
            onChange={handleInput}
            value={inputs.email}
            required
          />
        </div>
        <div className = "label--group">
          <label for="password">Contraseña</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Escribe tu contraseña"
            onChange={handleInput}
            value={inputs.password}
            required
          />
        </div>

        <button type="submit" className ="btn btn-signup">Enviar</button>
      </form>
    </div>
  );
}
