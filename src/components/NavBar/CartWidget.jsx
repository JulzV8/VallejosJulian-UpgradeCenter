import './CartWidget.css';
import shoppingcart from "./shoppingcartlogo.png";
import { useCartContext } from "../../context/CartContext";

function CartWidget() {
  const {totalItems} = useCartContext()
  let total = totalItems(); 
  return (
    <div className="pe-4 h-100 w-100 d-flex align-items-center justify-content-center position-relative">
      <img src={shoppingcart} className="nav-item" width="40" height="30" alt="cart"></img>
      <h5 className="fs-6">
        <span className="position-absolute start-50 translate-middle badge rounded-pill bg-secondary ">{total}</span>
      </h5>
    </div>
  )
}

export default CartWidget
