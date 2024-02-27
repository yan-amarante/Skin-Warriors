import "./styles.css"

import { useContext } from "react"

import { cartContext } from "../../Context/cartContext"

import { Sale } from "../../Pages/OfertasScreen/OfertasScreen"

import Close from "../Icons/Close"


function HorizontalSkinCard({id, image, name, pattern, price, wear}: Sale) {

    const cartContextValue = useContext(cartContext)

    if (!cartContextValue) throw new Error("useCartContext deve ser usado dentro de um cartProvider")

    const { skin, setSkin } = cartContextValue


    function removeItemFromCart() {

        const newArray = skin?.filter((item) => item.id !== id)

        setSkin(newArray)

    }


    return (
        <section className="skin-card-container horizontal-direction">
            <section className="image-container-horizontal">
                <img className="skin-image-horizontal" src={image} alt="" />
            </section>
            <article className="skin-infos skin-infos-horizontal">
                <h2 className="skin-name">{name}</h2>
                <p className="skin-pattern">{pattern}</p>
                <p className="skin-wear">{wear}</p>
                <section className="add_cart-container">
                    <p className="skin-price">R$ {price}</p>
                    <Close onClick={removeItemFromCart} className="remove-item" /> 
                </section>
            </article>
        </section>
    )
}


export default HorizontalSkinCard