import {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";

const item = {id:10, name:"Gabinete Gamer",description:"Marca: Sentey Modelo: X10 Otras características Incluye fuente de alimentación: No Tipo de estructura: Mid tower Puertos: USB 3.0 Bahías: 3.5 in Potencia de la fuente de alimentación: 0.01 W Altura x Ancho x Largo: 340 mm x 170 mm x 340 mm Placas madre compatibles: M-ATX,ITX", stock:2, precio:34.499}

const getItem = new Promise((res,rej)=>{
  const condition = true;
  if(condition)
  {
    setTimeout(()=>{
      res(item);
    },2000)  
  }
  else
  {
    rej("error not foundz")
  }
})

export const ItemDetailContainer = ({titulo}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getItem
    .then(res =>
      setProducts(item)
    )
    .catch( err => console.log("holiwis"))

  },[])


    return (
      <div>
        <h2 className="blockquote text-center">{titulo}</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {<div style={{ width: '30%' }} className="d-flex m-4" key={item.id}>
            <ItemDetail stock={products.stock} name={products.name} description={products.description } precio={products.precio}/>            
          </div>
          }
        </div>
      </div>
    )
}

export default ItemDetailContainer