

import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { contexto } from "./MiContexto"

export const Carrito = () => {

    const navigate = useNavigate()
    const { carrito } = useContext( contexto )

    const handleSeguir = () => {
        navigate('/')
    }


    return (
        <>
        <h2>Carrito</h2><br/>

        <section >
            {carrito.map( ( producto ) =>{
                    return (
                        <>
                        <article className="cardDetailContainer">
                            <div className="img"> { producto.img }</div>
                            <h3  >{producto.nombre}</h3>
                            <p> {producto.detalle}</p>
                            <p  > Precio : ${producto.precio}</p>
                            <p>Unidades : {producto.unidad}</p>
                        </article>
                        </>
                    )
            }) }
        </section>

        <p> Costo total del carrito </p>

        <button onClick={handleSeguir}> Seguir Comprando</button>

        </>
    )
}