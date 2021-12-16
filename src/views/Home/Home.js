import React from "react";
//import DetailProduct from '../../components/DetailProduct';
import ListProducts from '../../components/ListProducts';
import { ProductProvider } from '../../context/ProductContext';
import './home.css';

export default function Home() {
  return (
    <ProductProvider>
    <div className="product-container">
        <div>
        <h1>Lista de Productos</h1>
        <ListProducts/>
        </div>
        {/* <div className="product-container-derecha">
        <h1>Detalle del Producto</h1>
        <DetailProduct/>
        </div> */}
    </div>
    </ProductProvider>
)
}




