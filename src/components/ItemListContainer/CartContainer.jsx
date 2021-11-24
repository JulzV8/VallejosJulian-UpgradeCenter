import { useCartContext } from '../../context/CartContext'
import CartDetail from './CartDetail'

const CartContainer = () => {
  const {cartList,vaciarCarrito} = useCartContext()
  return (
    <div> {cartList.length ? 
    <div>

      <h1 class="display-4 text-center">Carrito</h1>
      <div class="container-fluid d-flex">
        <div class="w-25 h-100 text-center">
          <h3>Imagen</h3>
        </div>
        <div class="w-25 h-100 text-center">
          <h3 >Producto</h3>
        </div>
        <div class="w-25 h-100 text-center">
          <h3 >Cantidad</h3>
        </div>
        <div class="w-25 h-100 text-center">
          <h3 >Precio</h3>
        </div>
      </div>
      <div className="mb-4">
        {cartList.map((prod,index) =>
            
            <div>
              <CartDetail name={prod.name} cantidad={prod.cantidad} precio={prod.precio} image={prod.image} index={index}>  </CartDetail>         
            </div>
              )}
      </div>
      <div className="container-fluid d-flex justify-content-end p-4">
        <button type="button" className="btn btn-primary" onClick={vaciarCarrito}>Vaciar Carrito</button>
      </div>
              </div> : 
              <div className="text-center">
                <img className="img-fluid"src="https://image.flaticon.com/icons/png/512/107/107831.png" alt=""/>
                <h3>Carrito Vacio</h3>
              </div>
              }
    </div>
  )
}

export default CartContainer
