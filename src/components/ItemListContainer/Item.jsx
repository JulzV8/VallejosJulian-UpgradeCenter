import React from 'react'
import ItemCount from "./ItemCount";
import gabinete from "./gabinete.jpg";

const Item = (props) => {
  const {stock,key,name,description} = props;
  return (
      <div className="card mh-100 mw-100" key={key}>
        <img className="card-img-top" src={gabinete}alt="productImage" ></img>
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <p className="card-text text-muted text-center">{description}</p>
          <p className="card-text text-center">Stock Disponible: {stock}</p>
          <div>
            <ItemCount stock={stock}/>
          </div>
        </div>
      </div>
  )
}

export default Item
