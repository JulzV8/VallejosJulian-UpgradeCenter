import Item from "./Item";
import {useState, useEffect} from "react";
import { useParams } from "react-router";
import { getFirestore } from "../service/getFirestore";
// import ItemDetailContainer from "./ItemDetailContainer";


const productos = [
  {id:"1", name:"Gabinete Gamer", description:"Marca: Sentey Modelo: X10 Otras características Incluye fuente de alimentación: No Tipo de estructura: Mid tower Puertos: USB 3.0 Bahías: 3.5 in Potencia de la fuente de alimentación: 0.01 W Altura x Ancho x Largo: 340 mm x 170 mm x 340 mm Placas madre compatibles: M-ATX,ITX", categoria:"gabinete" , stock:5, precio:35000,image:"https://lezamapc.com.ar/16923-large_default/gabinete-gigabyte-aorus-ac300w-rgb.jpg"},
  {id:"2", name:"Gabinete Gamer", description:"Marca: Sentey Modelo: X10 Otras características Incluye fuente de alimentación: No Tipo de estructura: Mid tower Puertos: USB 3.0 Bahías: 3.5 in Potencia de la fuente de alimentación: 0.01 W Altura x Ancho x Largo: 340 mm x 170 mm x 340 mm Placas madre compatibles: M-ATX,ITX", categoria:"gabinete" ,stock:3, precio:35000 ,image:"https://www.sentey.com/media/2019/GABINETES/X10/500x500%20thumbs_X20_.png"},
  {id:"3", name:"Gabinete Gamer", description:"Marca: Sentey Modelo: X10 Otras características Incluye fuente de alimentación: No Tipo de estructura: Mid tower Puertos: USB 3.0 Bahías: 3.5 in Potencia de la fuente de alimentación: 0.01 W Altura x Ancho x Largo: 340 mm x 170 mm x 340 mm Placas madre compatibles: M-ATX,ITX", categoria:"gabinete" ,stock:7, precio:35000 ,image:"https://www.sharecomputacion.com/wp-content/uploads/2019/09/gabinete-taiding-f300-negro-mid-tower-sin-fuente-D_NQ_NP_976411-MLA28223660982_092018-F.png"},
  {id:"4", name:"Tarjeta Grafica", description:"EVGA GeForce RTX 3070 XC3 ULTRA GAMING, 08G-P5-3755-KL, 8GB GDDR6, iCX3 Cooling, ARGB LED, Metal Backplate, LHR", categoria:"gpu" ,stock:2, precio:35000, image:"https://asset.msi.com/resize/image/global/product/product_160516708705dd5f6377e11cba748c4e5caad64449.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"},
  {id:"5", name:"Tarjeta Grafica", description:"EVGA GeForce RTX 3070 XC3 ULTRA GAMING, 08G-P5-3755-KL, 8GB GDDR6, iCX3 Cooling, ARGB LED, Metal Backplate, LHR", categoria:"gpu" ,stock:5, precio:35000, image:"https://images.evga.com/products/gallery/png/08G-P5-3751-KR_LG_1.png"},
  {id:"6", name:"Tarjeta Grafica", description:"EVGA GeForce RTX 3070 XC3 ULTRA GAMING, 08G-P5-3755-KL, 8GB GDDR6, iCX3 Cooling, ARGB LED, Metal Backplate, LHR", categoria:"gpu" ,stock:3, precio:35000, image:"https://www.gigabyte.com/FileUpload/global/news/1851/o202010281846403367.png"},
  {id:"7", name:"Microprocesador", description:"Muy Lindo", categoria:"cpu" ,stock:7, precio:35000, image:"https://cdn-reichelt.de/bilder/web/xxl_ws/E200/AMD_R7-3800XT_01.png"},
  {id:"8", name:"Microprocesador", description:"Muy Lindo", categoria:"cpu" ,stock:2, precio:35000, image:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i7-9700k-0.jpg"},
  {id:"9", name:"Microprocesador", description:"Muy Lindo", categoria:"cpu" ,stock:6, precio:35000, image:"https://www.intel.com/content/dam/products/hero/foreground/processor-box-core-i9-extreme-edition-1x1.png"}
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
  const [prod, setProd] = useState({})
  const [loading, setLoading] = useState(true)

  const {categoryID} = useParams()

  useEffect(() => {
    const dbQuery = getFirestore()

    if (categoryID) {
      dbQuery.collection("items").where("categoria","==",categoryID).get()
      .then(data => setProducts(    data.docs.map(pro => ( {id: pro.id, ...pro.data() } )) ))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }
    else{
      dbQuery.collection("items").get()
      .then(data => setProducts(    data.docs.map(pro => ( {id: pro.id, ...pro.data() } )) ))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }
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