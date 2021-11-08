import Item from "./Item";
import {useState, useEffect} from "react";

const productos = [
  {id:1, name:"Gabinete Gamer", description:"Muy Lindo", stock:5},
  {id:2, name:"Gabinete Gamer", description:"Muy Lindo", stock:3},
  {id:3, name:"Gabinete Gamer", description:"Muy Lindo", stock:7},
  {id:4, name:"Gabinete Gamer", description:"Muy Lindo", stock:2},
  {id:5, name:"Gabinete Gamer", description:"Muy Lindo", stock:5},
  {id:6, name:"Gabinete Gamer", description:"Muy Lindo", stock:3},
  {id:7, name:"Gabinete Gamer", description:"Muy Lindo", stock:7},
  {id:8, name:"Gabinete Gamer", description:"Muy Lindo", stock:2},
  {id:9, name:"Gabinete Gamer", description:"Muy Lindo", stock:6}
]


const getFetch = new Promise((resolve,reject)=>{
  
  const condition = true;
  if(condition)
  {
    setTimeout(()=>{
      resolve(productos);
    },2000)  
  }
  else
  {
    reject("error not foundz")
  }
})

export const ItemListContainer = ({titulo}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFetch
    .then(res =>
      setProducts(res)
    )
    .catch( err => console.log("holiwis"))
    .finally(()=> setLoading(false))

  },[])


    return (
      <div>
        <h2 className="blockquote text-center">{titulo}</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {
          loading ? <div className="spinner-border" role="status">
                    </div> :          
          products.map(prod =>
          <div style={{ width: '15%' }} className="d-flex m-4" key={prod.id}>
            <Item stock={prod.stock} name={prod.name} description={prod.description} />            
          </div>
            )}
        </div>
      </div>
    )
}