import React, {useState, useEffect, useContext} from "react";
import axios from 'axios';

const ProductContext=React.createContext();

function ProductProvider(props){
    const [listaProductos,setListaProductos]=useState([]);
    const [selectedProduct,setSelectedProduct]=useState({});

    useEffect(() => {
        axios
        .get("https://ecomerce-master.herokuapp.com/api/v1/item")
        .then((response)=>{
            console.log(response.data);
            setListaProductos(response.data);
        })
        .catch((e)=>{
            console.log(e);
        });
       
    }, []);

    const value={
          listaProductos,
          selectedProduct,
          setSelectedProduct
    }
    return  <ProductContext.Provider value={value} {...props}/>;
               

}
  const useProductContext = ()=>{
      const context=useContext(ProductContext);
      return context;
  }
  export {ProductProvider,useProductContext};
  
  //ir al componente superior ( en este caso vista productos)
  // y envolver a los componentes que harán uso del contexto

  //por ultimo debo poner useProductContext en la pagina productos
  //para que envuelve a lista de productos y detalle de productos

