import "./OfertasScreen.css"

import SkinCard from "../../Components/SkinCard"

import { useState, useEffect } from "react"

import CreateSale from "../../Components/CreateSale"


const API_LIST_SALES: string = "https://api-skin-warriors.onrender.com/sales/list-sales"


export type Sale = {

    id: number;

    image: string;

    name: string;

    pattern: string;

    price: string;

    wear: string;

    category: string | null;

}

export type Categories = {

    categoryName: string;

    weapons: string[];

}


function OfertasScreen() {

    const [sales, setSales] = useState<Sale[] | null>(null)

    const [createSale, setCreateSale] = useState<boolean>(false)


    useEffect(() => {

        listSales()

    }, [])


    async function listSales() {

        const response: Response = await fetch(API_LIST_SALES)

        const data: Sale = await response.json()

        transformToArray(data)

    }

    function transformToArray(object: Sale) {

        const array: any[] = Object.values(object)

        setSales(array)

    }

    function renderSalesList() {

        return sales?.map((sale) => (

            <li key={sale.id}>
                <SkinCard
                    type="vertical"
                    id={sale.id}
                    image={sale.image}
                    name={sale.name}
                    pattern={sale.pattern}
                    price={sale.price}
                    wear={sale.wear}
                    category={sale.category}
                />
            </li>

        ))

    }

    function updateCreateSale() {

        setCreateSale((prevCreateSale) => !prevCreateSale)

    }

    function renderCreateSaleComponent() {

        if (createSale) return <CreateSale updateState={setCreateSale} />

    }

    return (

        <main className="sales-container">
            <section className="elements-background skins-filters-container">

            </section>
            <section className="elements-background skins-categories-container">
                <button onClick={() => updateCreateSale()} className="create-sale-button">Publicar Oferta</button>
            </section>
            <ul role="list" className="skins-list-container">
                {sales !== null ? renderSalesList() : null}
            </ul>
            {renderCreateSaleComponent()}
            <section></section>
        </main>

    )

}


export default OfertasScreen