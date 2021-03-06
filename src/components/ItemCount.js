import { Alert } from "bootstrap";
import swal from 'sweetalert';
import React, { useState } from "react"

const ItemCount = ({ stock, initial,  onAdd }) => {
    const [Cantidad, setCantidad] = useState(0);
   
    const SumarCantidad = () => {
        if (Cantidad < stock) {
            setCantidad(Cantidad + 1)
        }
    }
    const RestarCantidad = () => {
        if (Cantidad > initial) {
         setCantidad(Cantidad - 1)   
        }
        
    }
    const Añadir = () => {
        swal('Añadido a tu carrito! ');
        onAdd(Cantidad)
    }

    return (
        <>
            <div className="container">

            <button type="button" className="btn btn-light" onClick={SumarCantidad}>+</button>
            <span >{Cantidad}</span>
            <button type="button" className="btn btn-light" onClick={RestarCantidad}>-</button>

            <button type="button" class="btn btn-primary" onClick={Añadir}>Agregar al Carrito</button>

            </div>
        </>
    )
}

export default ItemCount