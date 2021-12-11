import React from 'react';
import DetailProduct from '../../components/DetailProduct';
import ListProducts from '../../components/ListProducts';
import { ProductProvider } from '../../context/ProductContext';
import './productos.css';

export default function Productos() {
    return (
        <ProductProvider>
        <div className="product-container">
            <div className="product-container-izquierda">
            <h1>Lista de Productos</h1>
            <ListProducts/>
            </div>
            <div className="product-container-derecha">
            <h1>Detalle del Producto</h1>
            <DetailProduct/>
            </div>
        </div>
        </ProductProvider>
    )
}
