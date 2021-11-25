import { useCartContext } from '../../context/CartContext'
import CartDetail from './CartDetail'
import { Link } from 'react-router-dom';

const CartContainer = () => {
  const {cartList,vaciarCarrito,totalDinero} = useCartContext()
  return (
    <div> {cartList.length ? 
      <div>
        <h1 className="display-4 text-center">Carrito</h1>
        <div className="container-fluid d-flex">
          <div className="w-25 h-100 text-center">
            <h3>Imagen</h3>
          </div>
          <div className="w-25 h-100 text-center">
            <h3 >Producto</h3>
          </div>
          <div className="w-25 h-100 text-center">
            <h3 >Cantidad</h3>
          </div>
          <div className="w-25 h-100 text-center">
            <h3 >Precio</h3>
          </div>
        </div>
        <div className="mb-4">
          {cartList.map((prod,index) =>
              <CartDetail name={prod.name} id={prod.id} cantidad={prod.cantidad} precio={prod.precio} image={prod.image} index={index}></CartDetail>)}
        </div>
        <div className="container-fluid d-flex">
            <div className="w-50 h-100"></div>
            <div className="w-25 h-100  text-center"><h3>Total</h3></div>
            <div className="w-25 h-100  text-center"><p>${totalDinero}</p></div>
        </div>

        <div className="container-fluid d-flex justify-content-end p-4">
          <button type="button" className="btn btn-primary" onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
      </div> : 
    <div className="d-flex flex-column text-center">
      <div>
        <img className="img-fluid"src="https://image.flaticon.com/icons/png/512/107/107831.png" alt=""/>
      </div>
      <Link to="/">
        <button type="button" className="btn btn-primary" onClick={vaciarCarrito}>Carrito Vacio. Ir al inicio.</button>
      </Link>
    </div>}

    </div>
  )
}

export default CartContainer
