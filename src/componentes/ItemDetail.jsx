
import { ItemCount } from "./ItemCount"
import { useContext } from "react"
import { contexto } from "./MiContexto"

export const ItemDetail = ( { listaProductos} ) => { 

    const { agregarProducto } = useContext( contexto )



    const onContador = (unidadesCompradas) => {
        const producto = {
            id : listaProductos.id,
            img : listaProductos.img,
            nombre : listaProductos.name,
            detalle : listaProductos.detalle,
            precio : listaProductos.price,
            unidad : unidadesCompradas
        }

        agregarProducto( producto   )
    }


    if(listaProductos){
        return (
            <>
                <article className="cardDetailContainer">
                    <div className="img"> { listaProductos.img }</div>
                    <h3> {listaProductos.name} </h3>
                    <p> {listaProductos.detalle} </p>
                    <ItemCount onContador={onContador} productoName={ listaProductos.name }/>
                </article>
            </>
        )
    }else{
        return <></>
    }
}

