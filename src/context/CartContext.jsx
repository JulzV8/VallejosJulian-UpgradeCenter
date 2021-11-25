import { createContext,useState,useContext } from "react";

const CartContext = createContext()
export const useCartContext = () =>{
  return useContext(CartContext)
}

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([])
  const [total, setTotal] = useState(0)
  const [totalDinero, setTotalDinero] = useState(0)

  const agregarCarrito = (item)=>{
      setTotal(total+item.cantidad)
      setTotalDinero(totalDinero + (item.precio * item.cantidad))
      if (cartList.find(element => element.id===item.id)) {
        cartList[cartList.findIndex(element => element.id===item.id)].cantidad += item.cantidad;
      }else{
        setCartList([...cartList, item])
      }
  }
  
  const eliminarPorId = (id) => {
    let element = cartList.find((a)=>{if(a.id === id){return true}else{return false}})
    setTotal(total - element.cantidad)
    setTotalDinero(totalDinero - (element.precio * element.cantidad))
    let resultado = cartList.filter((a)=>{if(a.id === id){return false}else{return true}})
    setCartList(resultado);

  }
  const vaciarCarrito = ()=>{setCartList([]);setTotal(0);setTotalDinero(0)}
  return (
    <CartContext.Provider value={{cartList,agregarCarrito,eliminarPorId,vaciarCarrito,total,totalDinero}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
