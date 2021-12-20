import { useCartContext } from '../../context/CartContext'
import CartDetail from './CartDetail'
import { Link } from 'react-router-dom';
import firebase from "firebase";
import { getFirestore } from "../service/getFirestore";
import { useState } from 'react';


const CartContainer = () => {
  const {cartList,idCompra,vaciarCarrito,totalDinero,agregarIdCompra} = useCartContext()
  const [nombre, setnombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [numero, setNumero] = useState("")
  const [email, setEmail] = useState("")
  const [emailSecundario, setEmailSecundario] = useState("")
  const vaciarDatos = () =>{
    setnombre("")
    setApellido("")
    setNumero("")
    setEmail("")
    setEmailSecundario("")
  }

  const handleKeyDown = (e) =>{
    const numeros = ["0","1","2","3","4","5","6","7","8","9","Backspace","Tab"]
    if (!numeros.includes(e.key)) {
      e.preventDefault();
    }
  }
  
  const handleChange = (e) =>{
    switch (e.target.id) {
      case "nombre":
        setnombre(e.target.value);
        break;
      case "apellido":
        setApellido(e.target.value);
        break;
      case "numero":
        setNumero(e.target.value);
        break;
      case "email":
        if (e.target.value.includes("@")) {
          setEmail(e.target.value);
        }
        break;
      default:
        setEmailSecundario(e.target.value);
        break;
    }
  }

  const generarOrden = ()=>{
    if (nombre !== "" && apellido !== "" && numero !== "") {
      if ( email !== "" && email === emailSecundario) {
        
        console.log("valido");
        const comprador = {
          nombre:nombre,
          apellido:apellido,
        tel:numero,
        email:emailSecundario
      }
      
      let order  = {}
      order.comprador = comprador;
      order.items = cartList.map(cartItem => {
        const id = cartItem.id
        const name = cartItem.name
        const precio= cartItem.precio
        const cant= cartItem.cantidad
        return {id,name,precio,cant}
      })
      order.total = totalDinero();
      
      const dbQuery = getFirestore()
      dbQuery.collection("orders").add(order)
      .then(resp => {
        vaciarCarrito();
        agregarIdCompra(resp.id)
      })
      .catch(err=>console.log(err))
      .finally()
      const itemsToUpdate = dbQuery.collection("items").where(
        firebase.firestore.FieldPath.documentId(), "in", cartList.map(i=>i.id))
        const batch = dbQuery.batch();
        itemsToUpdate.get()
        .then(collection=>{
          collection.docs.forEach(docSnapshot => {
            batch.update(docSnapshot.ref,{
              stock: docSnapshot.data().stock - cartList.find(item=> item.id === docSnapshot.id).cantidad})
            })
            batch.commit()
          })
          vaciarDatos();
        } else {
          setEmailSecundario("ç")
        }
    }
  }
  return (
    <div> 
      {cartList.length ? 
      <div>
        <div className="w-100">
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
                <CartDetail name={prod.name} id={prod.id} key={prod.id} cantidad={prod.cantidad} precio={prod.precio} image={prod.image} index={index}></CartDetail>)}
          </div>
          <div className="container-fluid d-flex">
              <div className="w-50 h-100"></div>
              <div className="w-25 h-100  text-center"><h3>Total</h3></div>
              <div className="w-25 h-100  text-center"><p>{totalDinero()}</p></div>
          </div>
          <div className="container-fluid d-flex justify-content-end p-4">
            <button type="button" className="btn btn-primary" onClick={vaciarCarrito}>Vaciar Carrito</button>
          </div>
        </div>
        <div className="w-50 mx-auto">
          <h2 className="display-6 text-center">Datos del comprador</h2>
          <div>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input autoComplete="off" id="nombre" type="text" onChange={handleChange} className="form-control" name='nombre' required></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Apellido</label>
              <input autoComplete="off" id="apellido" type="text" onChange={handleChange} className="form-control" name='apellido'required></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Telefono</label>
              <input autoComplete="off" id="numero" type="text" onKeyDown={handleKeyDown} onChange={handleChange} className="form-control" name='cel'required></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input autoComplete="off" id="email" type="email" onChange={handleChange}className="form-control" name='email'required></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Confirmar Email</label>
              { emailSecundario === "ç" ? <p>Error. Revise que sus mails ingresados coincidan</p> : <div></div>}
              <input autoComplete="off" id="emailSecundario" type="email" onChange={handleChange}  className="form-control" name='email'required></input>
            </div>
            <div className="container-fluid d-flex justify-content-end p-4">
              <button className="btn btn-primary" onClick={generarOrden}>Generar orden de compra</button>
            </div>
          </div>
        </div>
      </div> :
    <div className="d-flex flex-column text-center">
      {(idCompra !== 0) ? <div><h2>Compra realizada con exito! El ID de tu ultima compra es: {idCompra}</h2></div> : <div></div>}
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
