import {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import { getFirestore } from "../service/getFirestore";

export const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(1)

  const {id} = useParams()

  useEffect(() => {
    const dbQuery = getFirestore();
    dbQuery.collection("items").doc(id).get()
    .then(resp => {
      if (resp.exists) {
        setProductos({id: id,...resp.data() } )
        setLoading(0)
      }
      else{
        setLoading(-1)
      }})
    .catch((err) => console.log(err))

    .finally(()=> {

    })
  },[id])

    return (
      <div>
        <div className="d-flex flex-wrap justify-content-center">
          {
          loading === 1 ? <div className="d-flex m-3"><div className="spinner-border" role="status"></div><h2 className="mx-3">Cargando...</h2></div> :
          loading === 0 ?
          <div style={{ width: '30%' }} className="d-flex m-4" key={productos.id}>
            <ItemDetail id={productos.id} stock={productos.stock} name={productos.name} description={productos.description } precio={productos.precio} image={productos.urlImage}/>            
          </div>
          : <div><h2>Producto no encontrado</h2></div>
          } 
        </div>
      </div>
    )
}

export default ItemDetailContainer