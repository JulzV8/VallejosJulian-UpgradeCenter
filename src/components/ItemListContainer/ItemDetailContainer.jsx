import {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";

const products = [
  {id:"1", name:"Gabinete Gamer", description:"Marca: Sentey Modelo: X10 Otras características Incluye fuente de alimentación: No Tipo de estructura: Mid tower Puertos: USB 3.0 Bahías: 3.5 in Potencia de la fuente de alimentación: 0.01 W Altura x Ancho x Largo: 340 mm x 170 mm x 340 mm Placas madre compatibles: M-ATX,ITX", categoria:"gabinete" , stock:5, precio:34.999,image:"https://http2.mlstatic.com/D_NQ_NP_2X_866811-MLA46419489647_062021-F.webp"},
  {id:"2", name:"Gabinete Gamer", description:"Marca: Sentey Modelo: X10 Otras características Incluye fuente de alimentación: No Tipo de estructura: Mid tower Puertos: USB 3.0 Bahías: 3.5 in Potencia de la fuente de alimentación: 0.01 W Altura x Ancho x Largo: 340 mm x 170 mm x 340 mm Placas madre compatibles: M-ATX,ITX", categoria:"gabinete" ,stock:3, precio:34.999 ,image:"https://http2.mlstatic.com/D_NQ_NP_2X_866811-MLA46419489647_062021-F.webp"},
  {id:"3", name:"Gabinete Gamer", description:"Marca: Sentey Modelo: X10 Otras características Incluye fuente de alimentación: No Tipo de estructura: Mid tower Puertos: USB 3.0 Bahías: 3.5 in Potencia de la fuente de alimentación: 0.01 W Altura x Ancho x Largo: 340 mm x 170 mm x 340 mm Placas madre compatibles: M-ATX,ITX", categoria:"gabinete" ,stock:7, precio:34.999 ,image:"https://http2.mlstatic.com/D_NQ_NP_2X_866811-MLA46419489647_062021-F.webp"},
  {id:"4", name:"Tarjeta Grafica", description:"EVGA GeForce RTX 3070 XC3 ULTRA GAMING, 08G-P5-3755-KL, 8GB GDDR6, iCX3 Cooling, ARGB LED, Metal Backplate, LHR", categoria:"gpu" ,stock:2, precio:34.999, image:"https://http2.mlstatic.com/D_NQ_NP_921521-MLA45095655957_032021-O.jpg"},
  {id:"5", name:"Tarjeta Grafica", description:"EVGA GeForce RTX 3070 XC3 ULTRA GAMING, 08G-P5-3755-KL, 8GB GDDR6, iCX3 Cooling, ARGB LED, Metal Backplate, LHR", categoria:"gpu" ,stock:5, precio:34.999, image:"https://http2.mlstatic.com/D_NQ_NP_921521-MLA45095655957_032021-O.jpg"},
  {id:"6", name:"Tarjeta Grafica", description:"EVGA GeForce RTX 3070 XC3 ULTRA GAMING, 08G-P5-3755-KL, 8GB GDDR6, iCX3 Cooling, ARGB LED, Metal Backplate, LHR", categoria:"gpu" ,stock:3, precio:34.999, image:"https://http2.mlstatic.com/D_NQ_NP_921521-MLA45095655957_032021-O.jpg"},
  {id:"7", name:"Microprocesador", description:"Cantidad de núcleos 8 Cantidad de subprocesos 8 Frecuencia básica del procesador 3,60 GHz Frecuencia turbo máxima 4,90 GHz Caché 12 MB Intel® Smart Cache Velocidad del bus 8 GT/s Frecuencia de la Tecnología Intel® Turbo Boost 2.0 4.90 GHz TDP 95 W", categoria:"cpu" ,stock:7, precio:34.999, image:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i7-9700k-0.jpg"},
  {id:"8", name:"Microprocesador", description:"Cantidad de núcleos 8 Cantidad de subprocesos 8 Frecuencia básica del procesador 3,60 GHz Frecuencia turbo máxima 4,90 GHz Caché 12 MB Intel® Smart Cache Velocidad del bus 8 GT/s Frecuencia de la Tecnología Intel® Turbo Boost 2.0 4.90 GHz TDP 95 W", categoria:"cpu" ,stock:2, precio:34.999, image:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i7-9700k-0.jpg"},
  {id:"9", name:"Microprocesador", description:"Cantidad de núcleos 8 Cantidad de subprocesos 8 Frecuencia básica del procesador 3,60 GHz Frecuencia turbo máxima 4,90 GHz Caché 12 MB Intel® Smart Cache Velocidad del bus 8 GT/s Frecuencia de la Tecnología Intel® Turbo Boost 2.0 4.90 GHz TDP 95 W", categoria:"cpu" ,stock:6, precio:34.999, image:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i7-9700k-0.jpg"}
]
// const item = {id:10, name:"Gabinete Gamer",description:"Marca: Sentey Modelo: X10 Otras características Incluye fuente de alimentación: No Tipo de estructura: Mid tower Puertos: USB 3.0 Bahías: 3.5 in Potencia de la fuente de alimentación: 0.01 W Altura x Ancho x Largo: 340 mm x 170 mm x 340 mm Placas madre compatibles: M-ATX,ITX", stock:2, precio:34.499}

const getItem = new Promise((res,rej)=>{
  const condition = true;
  if(condition)
  {
    setTimeout(()=>{
      res(products);
    },2000)  
  }
  else
  {
    rej("error not foundz")
  }
})

export const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {id} = useParams()

  useEffect(() => {
    getItem
    .then(res=> setProductos(res.find(res => res.id === id)))
    .catch( err => console.log("holiwis"))
    .finally(()=> setLoading(false))   

  },[id])

    return (
      <div>
        <div className="d-flex flex-wrap justify-content-center">
          {
          loading ? <div className="d-flex m-3"><div className="spinner-border" role="status"></div><h2 className="mx-3">Cargando...</h2></div> :
          <div style={{ width: '30%' }} className="d-flex m-4" key={productos.id}>
            <ItemDetail stock={productos.stock} name={productos.name} description={productos.description } precio={productos.precio} image={productos.image}/>            
          </div>
          }
        </div>
      </div>
    )
}

export default ItemDetailContainer