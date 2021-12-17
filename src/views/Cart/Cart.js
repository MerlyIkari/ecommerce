import React,{useState, useEffect} from "react";
import './cart.css';
import { useItemContext } from "../../context/ItemContext";


export default function Cart(handleAddProduct,handleRemoveProduct,handleClearCart){
   const context=useItemContext();
   const [TotalPaga, setTotalPaga]=useState(0);

    useEffect(() => {
        let auxTotalPaga=0;
        context.cartItems.map((item)=>{
            auxTotalPaga= auxTotalPaga + item.cant*item.price})
            //console.log(TotalPaga);
            setTotalPaga(auxTotalPaga);
        
    }, [context.cartItems])

  /*const total=(cartItems)=>{
                let auxTotalPaga=0;
             (cartItems.map((item)=>{
                return auxTotalPaga= auxTotalPaga + item.cant*item.price}))
                //console.log(TotalPaga);
                setTotalPaga(auxTotalPaga);
              
   };*/

    return (
        <div className="cart-items">
                <h1>Articulos del carrito </h1>

                <h2>
                {context.cartItems.length >=1 && (<button id="clear-cart" onClick={()=>context.handleClearCart()}>
                    Limpiar Carrito</button>)}
                    </h2>
                    
            {context.cartItems.length===0 && (<div> <h3>NO HAY ARTICULO AGREGADOS </h3></div>)}

            <div>
                {context.cartItems.map( (item)=>(
                    <div key={item._id} className="cart-list">
                        <div className = "cart-group">
                        <img 
                        src={item.image} 
                        alt={item.product_name}/>
                        </div>
                        <div className="cart-items-name">{item.product_name}</div>
                        <div className="cart-items-funcion">
                            <button className="cart-items-add"
                            onClick={()=>context.handleAddProduct(item)}>+</button>
                            <button className="cart-items-remove"
                            onClick={()=>context.handleRemoveProduct(item)}>-</button>
                        </div>
                        <div className="cart-items-price">
                        <div >
                            Cantidad:{item.cant}
                        </div>
                        <div >
                           Precio Unitario: ${item.price}
                        </div>
                        <div >
                            Subtotal: ${item.cant*item.price}
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="precio-total">
                      <h3>TOTAL A PAGAR :</h3>
                    <div className="precio">
                        <h3>$ {TotalPaga}</h3>
                
                    </div>
            </div>
            
           </div>
        
    );
};