

import { Link, useNavigate } from "react-router-dom"


export const Item = ( {id, name, img, price } ) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate( `/producto/${id}` ) 
    }

        return (
            <>
                <article className="cardProductContainer">
                    <h3> {name} </h3>
                    <div className="img"> { img }</div>
                    <p>Precio :  { price }</p>
                    <button className="button" onClick={ handleClick }  >Detalle</button>
                    {/* <Link to={`/productos/:${id}`} >Ver mas</Link> */}
                </article>
            </>
        )
}


