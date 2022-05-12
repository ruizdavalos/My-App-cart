
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const ItemCount = ( {productoName, onContador} ) => {

    const [ stock, setStock ] = useState( 5 )
    const [ contador, setContador] = useState( 1 )
    const [ compra, setCompra] = useState(0)
    const [ confirmado, setConfirmado] = useState( true )
    const [ reConfirmar, setReConfirmar] = useState( true )
    const navigate = useNavigate()


    const restar = () =>{
        if ( contador > 1 ){
            setContador( contador - 1)
        }
    }

    const sumar = () =>{
        if ( contador <  stock ) {
            setContador( contador + 1) 
        }
    }

    const comprar = () => {
        if ( stock >= contador) {
            setContador( 1 ) 
            setCompra( contador )
            setConfirmado( false )
        }else  setContador( 'Sin stock')
    }

const volver = () => {
    setConfirmado( true )
}

const confirmar = () => {
    setStock( stock - contador)
    setReConfirmar( false )
}

const cerrar = () => {
    setConfirmado( !confirmado )
    navigate( `/carrito` ) 
    onContador( compra )
}

    if( confirmado ) {
        return (
            <>
                <div className="itemCountContainer">
                    <p>En stock :   {stock}</p>
                    <div className="countContainer">
                        <button onClick={ restar } >-</button>
                        <p>  {contador}</p>
                        <button onClick={ sumar } >+</button>
                    </div>
                    <div className='botonComprar'>
                        <button onClick={ comprar }  >Agregar a carrito</button>
                    </div>
                </div>
            </>
        )

    }else{
        if( reConfirmar ){
            return (
                <>
                    <div className="modal">
                        <div className="contenedorDentroModal">
                            <h2>cantidad seleccionada : <br />{compra}</h2>
                            <p>En stock { stock }</p>
                            <button onClick={ volver } className="buttonClose"  > Volver </button>
                            <button onClick={ confirmar } className="buttonClose"  > Confirmar </button>
                        </div>
                    </div>
                </>
            )

        }else {
            return(
                <>
                    <div className="modal">
                        <div className="contenedorDentroModal">
                            <h3> {productoName} </h3>
                            <p> agrego a carrito : <br />{compra}</p>
                            <button onClick={ cerrar } className="buttonClose"  > Ir a carrito </button>
                        </div>
                    </div>
                </>
            )
        }
    }
}