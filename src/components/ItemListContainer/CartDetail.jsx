import React from 'react'

const CartDetail = (props) => {
  const {name,precio,image,cantidad,index} = props;
  let background = "#eee";
  let total = precio*cantidad;
  if (index%2) {
    background = "#fff";
  }

  return (
    <div style={{height: '150px','backgroundColor':background}}class="container-fluid d-flex">
      <div class="w-25 h-100 p-0 m-0 text-center">
      <img className="h-100" src={image}alt="productImage" ></img>
      </div>
      <div class="w-25 h-100 d-flex border-start border-dark justify-content-center align-items-center">
        <p >{name}</p>
      </div>
      <div class="w-25 h-100 d-flex border-start border-dark justify-content-center align-items-center">
        <p >{cantidad}</p>
      </div>
      <div class="w-25 h-100 d-flex border-start border-dark justify-content-center align-items-center">
        <p >${total}</p>
      </div>
    </div>
  )
}

export default CartDetail
