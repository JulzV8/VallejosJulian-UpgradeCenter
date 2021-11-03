import gabinete from "./gabinete.jpg";
import React, {useState } from "react";

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

const ItemCount = ({textoBoton}) => {
  const stock = 5;
  const [itemCount, setItemCount] = useState(0);
  return (
    <div>
      <div className="card w-50">
      <img src={gabinete}alt="cart" ></img>
        <div className="card-body">
          <h5 className="card-title text-center">Gabinete Gamer</h5>
          <p className="card-text text-center">Stock Disponible: 5</p>
          <button onClick={()=>{setItemCount(count(false,stock,itemCount))}} className="btn btn-primary">-</button>
          {itemCount}
          <button onClick={()=>{setItemCount(count(true,stock,itemCount))}} className="btn btn-primary">+</button>        
        </div>
      </div>
    </div>
  )
}

export default ItemCount
