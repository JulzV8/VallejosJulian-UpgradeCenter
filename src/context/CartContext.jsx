import { createContext,useState,useContext } from "react";

const CartContext = createContext()
export const useCartContext = () =>{
  return useContext(CartContext)
}

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([])

  const agregarCarrito = (item)=>{
      console.log(cartList);
      console.log("item id" + item.id);
      if (cartList.find(element => element.id===item.id)) {
        cartList[cartList.findIndex(element => element.id===item.id)].cantidad += item.cantidad;
      }else{
        setCartList([...cartList, item])
      }
  }
  const vaciarCarrito = ()=>{setCartList([])}
  return (
    <CartContext.Provider value={{cartList,agregarCarrito,vaciarCarrito}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
