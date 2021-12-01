import {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import { getFirestore } from "../service/getFirestore";

export const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {id} = useParams()

  useEffect(() => {
    const dbQuery = getFirestore();
    dbQuery.collection("items").doc(id).get()
    .then(resp => setProductos({id: id,...resp.data() } ))
    .catch(err => console.log(err))

    .finally(()=> setLoading(false))
  },[id])

    return (
      <div>
        <div className="d-flex flex-wrap justify-content-center">
          {
          loading ? <div className="d-flex m-3"><div className="spinner-border" role="status"></div><h2 className="mx-3">Cargando...</h2></div> :
          <div style={{ width: '30%' }} className="d-flex m-4" key={productos.id}>
            <ItemDetail id={productos.id} stock={productos.stock} name={productos.name} description={productos.description } precio={productos.precio} image={productos.urlImage}/>            
          </div>
          }
        </div>
      </div>
    )
}

export default ItemDetailContainer