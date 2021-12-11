import React, {useState,useContext} from "react";
const ItemContext=React.createContext();

function ItemProvider(props){
    const [cartItems,setCartItems]=useState([]);

    //borramos useEffect

    const handleAddProduct=(product)=>{
        const ProductExist=cartItems.find((item)=>item._id === product._id);
        if (ProductExist){
            setCartItems(cartItems.map((item)=> item._id === product._id ?
            {...ProductExist, cant: ProductExist.cant + 1}: item));
           } else {
               setCartItems([...cartItems,{...product,cant:1}]);
           }
    };

    const handleRemoveProduct=(product)=>{
        const ProductExist=cartItems.find((item)=>item._id === product._id);
        if (ProductExist.ant===1){
            setCartItems(cartItems.filter((item)=> item._id !== product._id))
           } else {
               setCartItems(cartItems.map((item)=> item._id === product._id ?
               {...ProductExist, cant:ProductExist.cant -1} : item));
           }
    };

    const handleClearCart=()=>{
        setCartItems([])
    };

    const value={
        cartItems,
        setCartItems,
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