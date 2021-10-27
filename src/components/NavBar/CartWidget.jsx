import './CartWidget.css';
import shoppingcart from "./shoppingcartlogo.png";

function CartWidget() {
  return (
    <div>
      <a class="navbar-brand" href="#">
        <img src={shoppingcart} width="40" height="30" alt="cart"></img>
      </a>
    </div>
  )
}

export default CartWidget
