import Item from "./Item";
import {useState, useEffect} from "react";
import { useParams } from "react-router";
// import ItemDetailContainer from "./ItemDetailContainer";


const productos = [
  {id:"1", name:"Gabinete Gamer", description:"Marca: Sentey Modelo: X10 Otras características Incluye fuente de alimentación: No Tipo de estructura: Mid tower Puertos: USB 3.0 Bahías: 3.5 in Potencia de la fuente de alimentación: 0.01 W Altura x Ancho x Largo: 340 mm x 170 mm x 340 mm Placas madre compatibles: M-ATX,ITX", categoria:"gabinete" , stock:5, precio:34.999,image:"https://http2.mlstatic.com/D_NQ_NP_2X_866811-MLA46419489647_062021-F.webp"},
  {id:"2", name:"Gabinete Gamer", description:"Marca: Sentey Modelo: X10 Otras características Incluye fuente de alimentación: No Tipo de estructura: Mid tower Puertos: USB 3.0 Bahías: 3.5 in Potencia de la fuente de alimentación: 0.01 W Altura x Ancho x Largo: 340 mm x 170 mm x 340 mm Placas madre compatibles: M-ATX,ITX", categoria:"gabinete" ,stock:3, precio:34.999 ,image:"https://http2.mlstatic.com/D_NQ_NP_2X_866811-MLA46419489647_062021-F.webp"},
  {id:"3", name:"Gabinete Gamer", description:"Marca: Sentey Modelo: X10 Otras características Incluye fuente de alimentación: No Tipo de estructura: Mid tower Puertos: USB 3.0 Bahías: 3.5 in Potencia de la fuente de alimentación: 0.01 W Altura x Ancho x Largo: 340 mm x 170 mm x 340 mm Placas madre compatibles: M-ATX,ITX", categoria:"gabinete" ,stock:7, precio:34.999 ,image:"https://http2.mlstatic.com/D_NQ_NP_2X_866811-MLA46419489647_062021-F.webp"},
  {id:"4", name:"Tarjeta Grafica", description:"EVGA GeForce RTX 3070 XC3 ULTRA GAMING, 08G-P5-3755-KL, 8GB GDDR6, iCX3 Cooling, ARGB LED, Metal Backplate, LHR", categoria:"gpu" ,stock:2, precio:34.999, image:"https://http2.mlstatic.com/D_NQ_NP_921521-MLA45095655957_032021-O.jpg"},
  {id:"5", name:"Tarjeta Grafica", description:"EVGA GeForce RTX 3070 XC3 ULTRA GAMING, 08G-P5-3755-KL, 8GB GDDR6, iCX3 Cooling, ARGB LED, Metal Backplate, LHR", categoria:"gpu" ,stock:5, precio:34.999, image:"https://http2.mlstatic.com/D_NQ_NP_921521-MLA45095655957_032021-O.jpg"},
  {id:"6", name:"Tarjeta Grafica", description:"EVGA GeForce RTX 3070 XC3 ULTRA GAMING, 08G-P5-3755-KL, 8GB GDDR6, iCX3 Cooling, ARGB LED, Metal Backplate, LHR", categoria:"gpu" ,stock:3, precio:34.999, image:"https://http2.mlstatic.com/D_NQ_NP_921521-MLA45095655957_032021-O.jpg"},
  {id:"7", name:"Microprocesador", description:"Muy Lindo", categoria:"cpu" ,stock:7, precio:34.999, image:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i7-9700k-0.jpg"},
  {id:"8", name:"Microprocesador", description:"Muy Lindo", categoria:"cpu" ,stock:2, precio:34.999, image:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i7-9700k-0.jpg"},
  {id:"9", name:"Microprocesador", description:"Muy Lindo", categoria:"cpu" ,stock:6, precio:34.999, image:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i7-9700k-0.jpg"}
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

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoryID} = useParams()

  useEffect(() => {
    if (categoryID) {
      getFetch
      .then(res =>
        setProducts(res.filter(res => res.categoria === categoryID)))
      .catch( err => console.log("holiwis"))
      .finally(()=> setLoading(false))   
    } else {
      getFetch
      .then(res =>
        setProducts(res)
      )
      .catch( err => console.log("holiwis"))
      .finally(()=> setLoading(false))      
    }

  },[categoryID])

    return (
      <div>
        <h2 className="blockquote text-center">{}</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {loading ? <div className="d-flex m-3"><div className="spinner-border" role="status"></div><h2 className="mx-3">Cargando...</h2></div>  :          
          products.map(prod =>
          <div style={{ width: '15%', height: '100%' }} className="d-flex m-4" key={prod.id}>
            <Item stock={prod.stock} name={prod.name} id={prod.id} image={prod.image}/>            
          </div>
            )}
        {/* {loading ? <div className="spinner-border" role="status"></div> : <div>{<ItemDetailContainer/>}</div>} */}
        </div>

      </div>
    )
}