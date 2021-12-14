import React from 'react';
import "./listProducts.css";
import { useProductContext } from '../../context/ProductContext';
import { useItemContext } from '../../context/ItemContext';
//import {cartItems} from '../../context/ItemContext';

export default function ListProducts() {
    const context=useProductContext();
    const context2=useItemContext();
    // tenemos guardado lista de productos , el producto seleccionado y la actualizacion del roducto seleccionado
  
    return (
        <div className="products">
           {context.listaProductos.map((product)=>(
               <div key={product._id} className="card">
                   <div>
                       <img  className="product-image" 
                       src={product.image} alt={product.product_name} />
                    </div>
                    <div>
                    <h3 key={product._id} onClick={()=>context.setSelectedProduct(product)}> {product.product_name}</h3> 
                    </div>
                    <div className="product-price">${product.price}</div>
                    <div>
                    {/*<button className="product-add-button" 
                        onClick={()=>context2.setCartItems([...context2.cartItems,product])}
                        >  
           Añadir al carrito</button>*/}
                    <button className="product-add-button" onClick={()=>context2.handleAddCart(product)}>Añadir al carrito</button>
                    </div>
               </div>
              
           ))}
        </div>
    )
}
