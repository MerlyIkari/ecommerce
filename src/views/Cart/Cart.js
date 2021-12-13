import React from "react";
import './cart.css';
import { useItemContext } from "../../context/ItemContext";
//import ListProducts from "../../components/ListProducts";


export default function Cart(handleAddProduct,handleRemoveProduct,handleClearCart){
   const context=useItemContext();
    return (
        <div className="cart-items">
            <div className="cart-items-header">Articulos del carrito</div>
            <div classname="clear-cart">
                {context.cartItems.length >=1 && (<button classname="cart-clear-items" onClick={()=>context.handleClearCart()}>
                    Limpiar Carrito</button>)}
            </div>


            {context.cartItems.length===0 && (<div>NO HAY ARTICULO AGREGADOS</div>)}

            <div>
                {context.cartItems.map( (item)=>(
                    <div key={item._id} className="cart-items-list">
                        <img classname="cart-items-image" 
                        src={item.image} 
                        alt={item.product_name}/>
                        <div className="cart-items-name">{item.product_name}</div>
                        <div className="cart-items-funcion">
                            <button className="cart-items-add"
                            onClick={()=>context.handleAddProduct(item)}>+</button>
                            <button className="cart-items-remove"
                            onClick={()=>context.handleRemoveProduct(item)}>-</button>
                        </div>
                        <div classname="cart-items-price">
                            {item.cant}*${item.price}
                        </div>
                    </div>
                ))}
            </div>
            <div classname="cart-items-total-price-name">
                    Precio Total
                    <div classname="cart-items-total-price">totalPrice</div>
            </div>
           </div>
        
    );
};