import "./styles.css"

import AddCartIcon from "../Icons/AddCartIcon"

import { sale } from "../../Pages/OfertasScreen/OfertasScreen"


function SkinCard({ float, image, name, pattern, price, wear }: sale) {

    return (
        <section className="skin-card-container">
            <section className="image-container">
                <img className="skin-image" src={image} alt="" />
            </section>
            <article className="skin-infos">
                <h2 className="skin-name">{name}</h2>
                <p className="skin-pattern">{pattern}</p>
                <p className="skin-wear">{wear}</p>
                <p className="skin-float">{float}</p>
                <section className="add_cart-container">
                    <p className="skin-price">{price}</p>
                    <AddCartIcon className="add_cart-icon" />
                </section>
            </article>
        </section>
    )
}


export default SkinCard


const skinTeste =
{
    "id": "skin-65684",
    "name": "Desert Eagle | Chamas",
    "description": "Tão cara quanto poderosa, a Desert Eagle é uma pistola icônica difícil de domar, mas surpreendentemente precisa a longa distância.",
    "weapon": {
        "id": "weapon_deagle",
        "name": "Desert Eagle"
    },
    "category": {
        "id": "csgo_inventory_weapon_category_pistols",
        "name": "Pistolas"
    },
    "pattern": {
        "id": "aa_flames",
        "name": "Chamas"
    },
    "min_float": 0,
    "max_float": 0.08,
    "rarity": {
        "id": "rarity_mythical_weapon",
        "name": "Restrito"
    },
    "stattrak": false,
    "souvenir": false,
    "paint_index": "37",
    "wears": [
        {
            "id": "SFUI_InvTooltip_Wear_Amount_0",
            "name": "Nova de Fábrica"
        },
        {
            "id": "SFUI_InvTooltip_Wear_Amount_1",
            "name": "Pouco Usada"
        }
    ],
    "collections": [
        {
            "id": "collection-set-dust",
            "name": "A Coleção Dust",
            "image": "https://raw.githubusercontent.com/steamdatabase/gametracking-csgo/108f1682bf7eeb1420caaf2357da88b614a7e1b0/csgo/pak01_dir/resource/flash/econ/set_icons/set_dust.png"
        }
    ],
    "crates": [],
    "image": "https://raw.githubusercontent.com/ByMykel/CSGO-API/4fdf048a2b6c21494df4fe915f5fdea5accc6a61/public/images/econ/default_generated/weapon_deagle_aa_flames_light.png"
}