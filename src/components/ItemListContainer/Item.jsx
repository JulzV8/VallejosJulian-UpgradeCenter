import React from 'react'
import { Link } from 'react-router-dom';


const Item = (props) => {
  const {stock,name,id,image} = props;
  return (
      <div className="card mh-100">
        <Link to={`detail/${id}`}>
          <img className="card-img-top img-fluid" src={image}alt="productImage" ></img>
        </Link>
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          {/* <p className="card-text text-muted text-center">{description}</p> */}
          <p className="card-text text-center">Stock Disponible: {stock}</p>
        </div>
      </div>
  )
}

export default Item
