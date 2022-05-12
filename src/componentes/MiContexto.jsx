

import { createContext, useState } from 'react'

export const contexto =  createContext()
const { Consumer, Provider} = contexto    //  leer, usar



export const MiCustomProvider = ({ children}) =>{

    const [ cantidadTotal, setCantidadTotal ] = useState( 0 )
    const [ precioTotal, setPrecioTotal ] = useState( 0 )
    const [ carrito, setCarrito ] = useState( [] )
    const [ nombreProducto, setNombreProducto ] = useState( '' )

 
    console.log( carrito)

    const agregarProducto = (producto ) =>{
        estaEnCarrito( producto)
}

    const eliminarProducto = ( id ) => {

    }

    const vaciarCarrito = () => {
        // setCarrito( [] )
    }


    const estaEnCarrito = ( producto ) => {


        setCarrito([...carrito, producto])



    }


    const valorDelContexto = { 
        cantidadTotal,
        precioTotal ,
        carrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
        estaEnCarrito,
        nombreProducto
        
    }

    return (
        <Provider value={ valorDelContexto } >
            { children }
        </Provider>
    )
}