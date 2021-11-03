import ItemCount from "./ItemCount";
import React from "react";

export const ItemListContainer = ({titulo,count}) => {
    return (
      <div>
        <h2 className="blockquote text-center">{titulo}</h2>
        <div className="d-flex justify-content-center">
          <ItemCount textoBoton="Soy un Boton"/>
        </div>
      </div>
    )
}