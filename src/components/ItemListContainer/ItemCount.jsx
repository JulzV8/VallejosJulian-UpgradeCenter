import React, {useState } from "react";

const ItemCount = (props) => {
const {stock} = props
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

  return (
    <div className="d-flex justify-content-between">
      <button onClick={()=>{setItemCount(count(false,stock,itemCount))}} className="btn btn-primary">-</button>
      <div>
        {itemCount}
      </div>
      <button onClick={()=>{setItemCount(count(true,stock,itemCount))}} className="btn btn-primary">+</button>
    </div>
  )
}

export default ItemCount
