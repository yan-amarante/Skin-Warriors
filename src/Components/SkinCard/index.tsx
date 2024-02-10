import "./styles.css"

import AddCartIcon from "../Icons/AddCartIcon"

import { Sale } from "../../Pages/OfertasScreen/OfertasScreen"

import Close from "../Icons/Close";

import { useContext } from 'react'

import { cartContext } from "../../Context/cartContext"


interface SkinCardProps extends Sale {

    type: string;

}


function SkinCard({ type, id, image, name, pattern, price, wear, category }: SkinCardProps) {

    const cartContextValue = useContext(cartContext)


    if (!cartContextValue) throw new Error("useCartContext deve ser usado dentro de um cartProvider")


    const { skin, setSkin } = cartContextValue


    const skinPropsContainer: Sale = {

        id: id,

        image: image,

        name: name,

        pattern: pattern,

        price: price,

        wear: wear,

        category: category

    }


    function returnDirectionStyle() {

        if (type === "vertical") return "vertical-direction"

        else if (type === "horizontal") return "horizontal-direction"

    }

    function removeItemFromCart() {

        const newArray = skin?.filter((item) => item.id !== id)

        setSkin(newArray)

    }


    return (

        <section className={`skin-card-container ${returnDirectionStyle()}`}>
            <section className="image-container">
                <img className="skin-image" src={image} alt="" />
            </section>
            <article className={type === "vertical" ? "skin-infos" : "skin-infos skin-infos-horizontal"}>
                <h2 className="skin-name">{name}</h2>
                <p className="skin-pattern">{pattern}</p>
                <p className="skin-wear">{wear}</p>
                <section className="add_cart-container">
                    <p className="skin-price">{price}</p>
                    {type === "horizontal" ? <Close onClick={removeItemFromCart} className="remove-item" /> : <AddCartIcon skinProp={skinPropsContainer} className="add_cart-icon" />}
                </section>
            </article>
        </section>

    )

}


export default SkinCard