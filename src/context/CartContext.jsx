import { createContext,useState,useContext } from "react";

const CartContext = createContext()
export const useCartContext = () =>{
  return useContext(CartContext)
}

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([])
  const [idCompra, setIdCompra] = useState(0);

  const agregarIdCompra = (id) => {
    setIdCompra(id);
  }

  const agregarCarrito = (item)=>{
    let encontrado = cartList.find(element => element.id===item.id);
      if (encontrado){
        if (encontrado.stock >= (item.cantidad + encontrado.cantidad)) {
          cartList[cartList.findIndex(element => element.id===item.id)].cantidad += item.cantidad;
          return 1;        
        }
        else{
          return -1;
        }
      }else{
        setCartList([...cartList, item])
        return 1;
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

const totalItems = (  )=>{
  return cartList.reduce((acum,valor)=>(acum + valor.cantidad),0);
}

  return (
    <CartContext.Provider value={{idCompra,cartList,agregarCarrito,eliminarPorId,vaciarCarrito,totalItems,totalDinero,agregarIdCompra}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
