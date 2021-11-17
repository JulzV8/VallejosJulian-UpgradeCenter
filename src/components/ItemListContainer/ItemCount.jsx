import React, {useState } from "react";
import { Link } from 'react-router-dom';


const ItemCount = (props) => {
const {stock} = props
const {terminar} = props
const [button, setButton] = useState(1);
const [itemCount, setItemCount] = useState(0);

  function count(sumar,stock,valor){
    let numero = valor
    if(sumar === true && numero < stock)
    {
      numero++
      return numero
    }
    if (sumar === false && numero > 0)
    {
      numero--
      return numero
    }
    return numero
  }
  const cambiarBoton = ()=>{setButton(0)}

  return (
      <div>
        {
          button === 1 ? 
          <div>
            <div div className="d-flex justify-content-between">
              <button onClick={()=>{setItemCount(count(false,stock,itemCount))}} className="btn btn-primary">-</button>
              <div>
                {itemCount}
              </div>
              <button onClick={()=>{setItemCount(count(true,stock,itemCount))}} className="btn btn-primary">+</button>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary" onClick={()=>{
                if(terminar(itemCount))
                cambiarBoton()
                }}>Agregar al carrito</button>
            </div>
          </div>:
            <div div className="d-flex justify-content-center">
              <Link exact to="/cart" className="btn btn-success">
              Hecho! Ir al carrito.
              </Link>
            </div>
        }
    </div>
  )
}

export default ItemCount
