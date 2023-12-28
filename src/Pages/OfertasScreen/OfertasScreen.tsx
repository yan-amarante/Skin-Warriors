import "./OfertasScreen.css"

function OfertasScreen() {

    return (
        <div className="containerOfertasScreen">
            <SkinCard />
            <SkinCard />
            <SkinCard />
            <SkinCard />
            <SkinCard />
        </div>
    )
}

function SkinCard() {
    return (
        <section className="skin-card-container">
            <section className="image-container">
                <img className="skin-image" src={skinTeste.image} alt="" />
            </section>
            <article className="skin-infos">
                <h2 className="skin-name">{skinTeste.weapon.name}</h2>
                <p className="skin-pattern">{skinTeste.pattern.name}</p>
                <p className="skin-wear">{skinTeste.wears[0].name}</p>
            </article>
            <section>
                <AddCartIcon/>
            </section>
        </section>
    )
}

function AddCartIcon() {

    return (

        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.44444 13.7059H12.4444C12.9333 13.7059 13.3333 14.1029 13.3333 14.5882C13.3333 15.0735 12.9333 15.4706 12.4444 15.4706H3.55556C3.06667 15.4706 2.66667 15.0735 2.66667 14.5882V5.76471H0.888889C0.4 5.76471 0 5.36765 0 4.88235C0 4.39706 0.4 4 0.888889 4H3.55556C4.04444 4 4.44444 4.39706 4.44444 4.88235V6.64706H16L12.4444 12.8235H4.44444V13.7059ZM4 16.3529C4.73778 16.3529 5.33333 16.9441 5.33333 17.6765C5.33333 18.4088 4.73778 19 4 19C3.26222 19 2.66667 18.4088 2.66667 17.6765C2.66667 16.9441 3.26222 16.3529 4 16.3529ZM12 16.3529C12.7378 16.3529 13.3333 16.9441 13.3333 17.6765C13.3333 18.4088 12.7378 19 12 19C11.2622 19 10.6667 18.4088 10.6667 17.6765C10.6667 16.9441 11.2622 16.3529 12 16.3529Z" fill="currentColor" />
            <path d="M17.5455 3.07692H15V4.92308H17.5455V8H19.4545V4.92308H22V3.07692H19.4545V0H17.5455V3.07692Z" fill="currentColor" />
        </svg>

    )

}

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

export default OfertasScreen