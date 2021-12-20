import React, {useState } from "react";
import { Link } from 'react-router-dom';


const ItemCount = (props) => {
const {stock} = props
const {terminar} = props
const [button, setButton] = useState(0);
const [itemCount, setItemCount] = useState(0);

  function count(sumar,stock,valor){
    let numero = valor
    if(sumar === 1 && numero < stock)
    {
      numero++
      return numero
    }
    if (sumar === 0 && numero > 0)
    {
      numero--
      return numero
    }
    return numero
  }
  const cambiarBoton = (num)=>{setButton(num)}

  return (
      <div>
            <div className="d-flex justify-content-between">
              <button onClick={()=>{setItemCount(count(0,stock,itemCount))}} className="btn btn-primary">-</button>
              <div>
                {itemCount}
              </div>
              <button onClick={()=>{setItemCount(count(1,stock,itemCount))}} className="btn btn-primary">+</button>
            </div>
        {
          (button <1 ) ? 
          <div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary" onClick={()=>{
                cambiarBoton(terminar(itemCount))
                }}>Agregar al carrito</button>
            </div>
            {button === -1 ? <div div className="d-flex justify-content-center">
            <p>Error! Parece que estas intentando agregar al carrito mas productos de los que hay en stock.</p>
            </div> : <div></div>}
          </div>: button === 1 ? 
            <div className="m-2 d-flex flex-column justify-content-center">
              <Link to="/cart" className="btn btn-success">
              Hecho! Terminar mi compra.
              </Link>
              <Link to="/" className="mt-2 btn btn-primary">
              Ir al inicio.
              </Link>
            </div>
            : <div></div> 
        }
    </div>
  )
}

export default ItemCount
