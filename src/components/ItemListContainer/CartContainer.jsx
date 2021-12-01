import { useCartContext } from '../../context/CartContext'
import CartDetail from './CartDetail'
import { Link } from 'react-router-dom';
import firebase from "firebase";
import { getFirestore } from "../service/getFirestore";


const CartContainer = () => {
  const {cartList,vaciarCarrito,totalDinero} = useCartContext()
    const buyer = {
    name:"julian",
    tel:"1175620408",
    email:"julian@gmail.com"
  }
  const generarOrden = ()=>{
    let order  = {}
    order.buyer = buyer;
    order.items = cartList.map(cartItem => {
      const id = cartItem.id
      const name = cartItem.name
      const precio= cartItem.precio
      return {id,name,precio}
    })
    order.total = totalDinero();

    const dbQuery = getFirestore()
    dbQuery.collection("orders").add(order)
    .then(resp => {vaciarCarrito();alert("Orden Generada con Exito!\nTu id de orden es: "+resp.id)})
    .catch(err=>console.log(err))
    .finally()

    const itemsToUpdate = dbQuery.collection("items").where(
      firebase.firestore.FieldPath.documentId(), "in", cartList.map(i=>i.id)
    )

    const batch = dbQuery.batch();

    itemsToUpdate.get()
    .then(collection=>{
      collection.docs.forEach(docSnapshot => {
        batch.update(docSnapshot.ref,{
          stock: docSnapshot.data().stock - cartList.find(item=> item.id === docSnapshot.id).cantidad
        })
      })

      batch.commit().then(res => {console.log("se actualizo");})
    }

    )
  }
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
            <div className="w-25 h-100  text-center"><p>{totalDinero()}</p></div>
        </div>

        <div className="container-fluid d-flex justify-content-end p-4">
          <button type="button" className="btn btn-primary" onClick={vaciarCarrito}>Vaciar Carrito</button>
          <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar Orden</button>
        </div>
      </div> : 
      <div className="d-flex flex-column text-center">
        <div>
          <img className="img-fluid"src="https://image.flaticon.com/icons/png/512/107/107831.png" alt=""/>
        </div>
      <Link to="/">
        <button type="button" className="btn btn-primary">Carrito Vacio. Ir al inicio.</button>
      </Link>
    </div>}

    </div>
  )
}

export default CartContainer
