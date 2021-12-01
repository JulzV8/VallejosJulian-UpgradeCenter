import { createContext,useState,useContext } from "react";

const CartContext = createContext()
export const useCartContext = () =>{
  return useContext(CartContext)
}

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([])
  const agregarCarrito = (item)=>{
    let encontrado = cartList.find(element => element.id===item.id);
      if (encontrado){
        cartList[cartList.findIndex(element => element.id===item.id)].cantidad += item.cantidad;
      }else{
        setCartList([...cartList, item])
      }
  }
  
  const eliminarPorId = (id) => {
    let resultado = cartList.filter((a)=>{if(a.id === id){return false}else{return true}})
    setCartList(resultado);

  }
  const vaciarCarrito = ()=>{setCartList([])}

const totalDinero = ()=>{
  return cartList.reduce((acum,valor)=>(acum + (valor.cantidad * valor.precio)),0)
}

  return (
    <CartContext.Provider value={{cartList,agregarCarrito,eliminarPorId,vaciarCarrito,totalDinero}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
