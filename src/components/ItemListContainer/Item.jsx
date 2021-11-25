import React from 'react'
import { Link } from 'react-router-dom';


const Item = (props) => {
  const {stock,name,id,image,precio} = props;
  return (
      <div className="card w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <Link to={`/detail/${id}`}>
          <div style={{ width: '150px', height: '150px' }}>
            <img className="img-fluid" src={image}alt="productImage" ></img>
          </div>
        </Link>
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <p className="text-center">Stock Disponible: {stock}</p>
          <p className="text-center">Precio: ${precio}</p>
        </div>
      </div>
  )
}

export default Item
