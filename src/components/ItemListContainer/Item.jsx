import React from 'react'
import { Link } from 'react-router-dom';


const Item = (props) => {
  const {stock,name,id,image,precio} = props;
  return (
      <div className="card w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <Link className="text-decoration-none" to={`/detail/${id}`}>
          {(stock !== 0) ? 
          <div>
            <img style={{ width: '150px', height: '150px'}} className="img-fluid" src={image}alt="productImage" ></img>
          </div>
          :
          <div>
            <div className="position-relative" style={{ width: '150px', height: '150px'}}>
              <img className="img-fluid" style={{opacity: 0.5}} src={image}alt="productImage" ></img>
              <h2 className="fw-bold position-absolute top-50 start-50 translate-middle" style={{ color: 'black'}} >AGOTADO</h2>
            </div>
          </div>
          }
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
