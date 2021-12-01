import React from 'react'
import { useCartContext } from "../../context/CartContext";

const CartDetail = (props) => {
  const {name,precio,image,cantidad,index,id} = props;
  const {eliminarPorId} = useCartContext()
  let background = "#eee";
  let total = precio*cantidad;
  if (index%2) {
    background = "#fff";
  }

  return (
    <div style={{height: '150px','backgroundColor':background}}className="container-fluid d-flex">
      <div className="w-25 h-100 p-0 m-0 text-center">
      <img className="h-100" src={image}alt="productImage" ></img>
      </div>
      <div className="w-25 h-100 d-flex border-start border-dark justify-content-center align-items-center">
        <p >{name}</p>
      </div>
      <div className="w-25 h-100 d-flex border-start border-dark justify-content-around align-items-center">
        <div className="d-flex justify-content-center mt-3">
          <p >{cantidad}</p>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-danger btn-sm" onClick={()=>{eliminarPorId(id)}} >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="w-25 h-100 d-flex border-start border-dark justify-content-center align-items-center">
        <p >${total}</p>
      </div>
    </div>
  )
}

export default CartDetail
