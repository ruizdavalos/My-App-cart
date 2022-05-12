
import { useContext } from "react";
import {contexto } from "./MiContexto"

import { TiShoppingCart } from "react-icons/ti";

export const CartWidget  = () => {




    return (
        <>
            <TiShoppingCart className='header__cartWidget'   alt="icons-carrito"/>
            <p className='header__cartWidget' ></p>
        </>

    )
}
