import React, {useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";


const ItemDetail = (props) => {
  const {stock,name,description,precio,image} = props;
  const [cantidad, setCantidad] = useState(0);
  const {agregarCarrito} = useCartContext()

  const onAdd = (cant)=>{
    if(cant>0){
      setCantidad(cant)
      agregarCarrito({...props, cantidad: cant})
      return true
    }
    return false
  }

  return (
      <div className="card mh-100 mw-100">
        <img className="card-img-top" src={image}alt="productImage" ></img>
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          {cantidad}
          <p className="card-text text-muted text-center">{description}</p>
          <p className="card-text text-center">Precio: ${precio}</p>
          <p className="card-text text-center">Stock Disponible: {stock}</p>
          <div>
            <ItemCount stock={stock} terminar={onAdd}/>
          </div>
        </div>
      </div>
  )
}

export default ItemDetail
