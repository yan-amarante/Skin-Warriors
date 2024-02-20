import "./styles.css"

import { Sale } from "../../Pages/OfertasScreen/OfertasScreen"

import AddCartIcon from "../Icons/AddCartIcon"


function VerticalSkinCard({ id, image, name, pattern, price, wear, category }: Sale) {

    const skinPropsContainer: Sale = {

        id: id,

        image: image,

        name: name,

        pattern: pattern,

        price: price,

        wear: wear,

        category: category

    }

    return (
        <section className="skin-card-container vertical-direction">
            <section className="image-container">
                <img className="skin-image" src={image} alt="" />
            </section>
            <article className="skin-infos">
                <h2 className="skin-name">{name}</h2>
                <p className="skin-pattern">{pattern}</p>
                <p className="skin-wear">{wear}</p>
                <section className="add_cart-container">
                    <p className="skin-price">R$ {price}</p>
                    <AddCartIcon skinProp={skinPropsContainer} className="add_cart-icon" />
                </section>
            </article>
        </section>
    )
}


export default VerticalSkinCard