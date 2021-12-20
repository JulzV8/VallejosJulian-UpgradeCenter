import Item from "./Item";
import {useState, useEffect} from "react";
import { useParams } from "react-router";
import { getFirestore } from "../service/getFirestore";
// import ItemDetailContainer from "./ItemDetailContainer";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoryID} = useParams()

  useEffect(() => {
    const db = getFirestore()
    const dbQuery = categoryID ? db.collection("items").where("categoria","==",categoryID) : db.collection("items")
    dbQuery.get()
    .then(data => setProducts(    data.docs.map(pro => ( {id: pro.id, ...pro.data() } )) ))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  },[categoryID])

    return (
      <div>
        <div className="d-flex flex-wrap justify-content-center">
          {loading ? <div className="d-flex m-3"><div className="spinner-border" role="status"></div><h2 className="mx-3">Cargando...</h2></div>  :          
          products.map(prod =>
          <div style={{ width: '200px', height: '300px' }} className="d-flex m-4" key={prod.id}>
            <Item stock={prod.stock} name={prod.name} id={prod.id} precio={prod.precio} image={prod.urlImage}/>            
          </div>
            )}
        </div>

      </div>
    )
}