import React, {useState,useContext} from "react";
//import { useProductContext } from "./ProductContext";
const ItemContext=React.createContext();

function ItemProvider(props){
    const [cartItems,setCartItems]=useState([]);
   // const [TotalPaga, setTotalPaga]=useState(0);

   /* const total=(cartItems)=>{
               let auxTotalPaga=0;
             (cartItems.map((item)=>{
                return auxTotalPaga= auxTotalPaga + item.cant*item.price}))
                
                 setTotalPaga(auxTotalPaga);
              
   };*/
    

    //borramos useEffect

    const handleAddCart= (product)=>{
        const ProductExist= cartItems.find((item)=>item._id === product._id);
        console.log(ProductExist);
        
        if (!ProductExist){
            product.cant=1;
            setCartItems([...cartItems,product]);
            //total(cartItems);
        }
            else
                  console.log("el producto ya está agregado en el carrito");
            
    };

    const handleAddProduct=(product)=>{
        const ProductExist=cartItems.find((item)=>item._id === product._id);
        console.log(ProductExist);
        if (ProductExist){
            setCartItems(cartItems.map((item)=> item._id === product._id ?
            {...ProductExist, cant: ProductExist.cant + 1}: item));
           // total(cartItems);
           } else {
               setCartItems([...cartItems,{...product,cant:1}]);
           }
    };

    const handleRemoveProduct=(product)=>{
        const ProductExist=cartItems.find((item)=>item._id === product._id);
        if (ProductExist.cant===1){
            setCartItems(cartItems.filter((item)=> item._id !== product._id))
           } else {
               setCartItems(cartItems.map((item)=> item._id === product._id ?
               {...ProductExist, cant:ProductExist.cant -1} : item));
              // total(cartItems);
           }
    };

    const handleClearCart=()=>{
        setCartItems([])
    };

    const value={
        cartItems,
        setCartItems,
       // total,
       // TotalPaga,
        handleAddCart,
        handleAddProduct,
        handleRemoveProduct,
        handleClearCart
  }

  return  <ItemContext.Provider value={value} {...props}/>;
               
}
const useItemContext = ()=>{
    const context=useContext(ItemContext);
    return context;
}
export {ItemProvider,useItemContext};