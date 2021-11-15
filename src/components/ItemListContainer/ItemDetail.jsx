import React from 'react'
import ItemCount from "./ItemCount";


const ItemDetail = (props) => {
  const {stock,name,description,precio,image} = props;
  return (
      <div className="card mh-100 mw-100">
        <img className="card-img-top" src={image}alt="productImage" ></img>
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <p className="card-text text-muted text-center">{description}</p>
          <p className="card-text text-center">Precio: ${precio}</p>
          <p className="card-text text-center">Stock Disponible: {stock}</p>
          <div>
            <ItemCount stock={stock}/>
          </div>
        </div>
      </div>
  )
}

export default ItemDetail
