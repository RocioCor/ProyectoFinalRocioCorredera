import React, {useContext, useState} from "react";
import { CartContext } from "../Cart/CartContext";
import {useForm} from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Fiirebase/firebaseConfig";

const Checkout = ( ) => {
    const [pedidoId, setPedidoId] = useState("")

    const { carrito, precioTotal } = useContext(CartContext);

    
    const {register, handleSubmit} =  useForm()

    const comprar= (data) => {
     const pedido={
        cliente: data,
        productos: carrito,
        total:precioTotal() 
     }
     console.log(pedido)
     const pedidoRef = collection(db, "pedidos")
    
     addDoc(pedidoRef, pedido)
     .then ((doc) => {
     setPedidoId(doc.id)
    })
}
if (pedidoId) {
    return(
       < div className= "container">
<h1 className="title">Muchas Gracias por tu compra!</h1>
<p>Tu n° de pedido es: {pedidoId}</p>
</div>
    )
}

    return (
        <div className="container">
        <h1 className="main-title">Estas a punto de finaizar compra!</h1>
        <form className="formulario"onSubmit={handleSubmit(comprar)}>
            <input type="text" placeholder="Ingresa tunombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresa tu e-mail" {...register("email")}/>
            <input type="phone" placeholder="Ingresa tu n° de celular" {...register("telefono")}/>
            <button type="submmit">Comprar</button>
        </form>
    </div>
    )
}
export default Checkout 