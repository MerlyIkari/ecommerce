import React from "react";
import useForm from "../../hooks/useForm";
import axios from "axios";
//import withProtectionAdmin from "../../utils/withProtectionAdmin";
//import { useHistory } from "react-router";
 export default function Crear () {
    
  const item = (datos) => {
    //Se hace el post a la API para registrar usuario
    //Se puede validar que la contraseña sea igual a confirmar contraseña
    const config = {
          headers: {
            Authorization: `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmE3OGU1NmM5ZDc0MDAxN2JjYTg0MCIsInJvbGUiOiJBRE1JTiIsImV4cCI6MTYzOTcwNjAzNywiaWF0IjoxNjM5NjE5NjM3fQ.Q_k7Jie_FR_av6hhGjTJL6cB7DtVkGRuQIGd17TKElk`,
          },
        };
    axios      
      .post("https://ecomerce-master.herokuapp.com/api/v1/item",datos, config)
      .then((response) => {
          window.localStorage.setItem("token", response.data.tokenAdmin);
        
        
        if (response.status === 200) {
          //activar la notificacion
        } else {
          //tener una notificacion del error
        }
        
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(item);
 };
  const { inputs, handleInput, handleSubmit } = useForm(item, {});
  return (
    <div>
      <h1>Crear productos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            id="product_name"
            type="text"
            name="product_name"
            placeholder="Pon el nombre del producto"
            onChange={handleInput}
            value={inputs.nombre}
          />
        </div>
        
        <div>
          <label>Descripcion</label>
          <input
            id="description"
            type="text"
            name="description"
            placeholder="Pon la descripcion del producto"
            onChange={handleInput}
            value={inputs.descripcion}
          />
        </div>
        <div>
          <label for="price">Precio</label>
          <input
            id="price"
            type="number"
            name="price"
            onChange={handleInput}
            value={inputs.precio}
          />
        </div>
        <div>
          <label for="category">Categoria</label>
          <input
            id="category"
            type="text"
            name="category"
            onChange={handleInput}
            value={inputs.categoria}
          />
        </div>
        <div>
          <label for="brand">Marca</label>
          <input
            id="brand"
            type="text"
            name="brand"
            onChange={handleInput}
            value={inputs.marca}
          />
        </div>
        <div>
          <label for="sku">Sku</label>
          <input
            id="sku"
            type="text"
            name="sku"
            onChange={handleInput}
            value={inputs.sku}
          />
        </div>
        <div>
          <label for="image">Imagen</label>
          <input
            id="image"
            type="text"
            name="image"
            onChange={handleInput}
            value={inputs.imagen}
            
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

