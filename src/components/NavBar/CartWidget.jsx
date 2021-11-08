import './CartWidget.css';
import shoppingcart from "./shoppingcartlogo.png";

function CartWidget() {
  return (
    <div>
      <a className="navbar-brand" href="https://www.google.com">
        <img src={shoppingcart} width="40" height="30" alt="cart"></img>
      </a>
    </div>
  )
}

export default CartWidget
