import "./OfertasScreen.css"

import SkinCard from "../../Components/SkinCard"

import { useState, useEffect } from "react"

import CreateSale from "../../Components/CreateSale"

import Button from "../../Components/Button"
import Dropdown from "../../Components/Dropdown"


const API_LIST_SALES: string = "https://api-skin-warriors.onrender.com/sales/list-sales?page="

const API_SEARCH_CATEGORIES: string = "https://api-skin-warriors.onrender.com/skins/search-categories"


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

    const [categories, setCategories] = useState<any>(null)


    useEffect(() => {

        listSales(API_LIST_SALES + "1")

        listCategories()

    }, [])


    async function listCategories() {

        const response: Response = await fetch(API_SEARCH_CATEGORIES)

        const data: Sale = await response.json()

        transformToArray(data, setCategories)

    }

    async function listSales(URL: string) {

        const response: Response = await fetch(URL)

        const data: Sale = await response.json()

        transformToArray(data, setSales)

    }

    function transformToArray(object: Sale, updateState: any) {

        const array: any[] = Object.values(object)

        updateState(array)

    }

    function renderSalesList() {

        return sales?.map((sale) => {

            if (typeof sale === "object") {

                return <li className="skins-list-item" key={sale.id}>
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

            }

        })

    }

    function updateCreateSale() {

        setCreateSale((prevCreateSale) => !prevCreateSale)

    }

    function renderCreateSaleComponent() {

        if (createSale) return <CreateSale updateState={setCreateSale} />

    }

    function changePage(pageNumber: string) {

        listSales(API_LIST_SALES + pageNumber)

    }

    function renderPageNumbers() {

        const totalOfPages: any = sales !== null ? sales[sales.length - 1] : 0

        const numberOfPages = []

        for (let i = 1; i <= totalOfPages; i++) {

            numberOfPages.push(i)

        }

        return numberOfPages.map((item) => {

            return <li className="page-list-items">
                <Button onClick={() => changePage(String(item))} className="page-button" title={String(item)} />
            </li>

        })


    }

    function renderSkeletonLoad() {

        const numberOfPages = []

        for (let i = 0; i < 14; i++) {

            numberOfPages.push(i)

        }

        return numberOfPages.map((item) => {

            return <li className="skins-list-item">
                <section className="skeleton-load-container skin-card-container">
                    <div className="skeleton-load-image"></div>
                    <div className="skeleton-load-text"></div>
                    <div className="skeleton-load-text"></div>
                    <div className="skeleton-load-text"></div>
                    <div className="skeleton-load-text"></div>
                </section>
            </li>

        })

    }

    function renderCategoriesOptions(weapons: any) {

        return weapons.map((item: any) => {

            return <h2 className="input-label">{item}</h2>

        })

    }

    function renderCategories() {

        return categories?.map((item: any) => {

            return <Dropdown title={item.categoryName} options={renderCategoriesOptions(Object.keys(item.weapons))} />

        })

    }

    return (

        <main className="sales-container">
            <section className="elements-background skins-filters-container">
            </section>
            <section className="elements-background skins-categories-container">
                {renderCategories()}
                <button onClick={() => updateCreateSale()} className="create-sale-button">Publicar Oferta</button>
            </section>
            <ul role="list" className="skins-list-container">
                {sales !== null ? renderSalesList() : renderSkeletonLoad()}
            </ul>
            {renderCreateSaleComponent()}
            <ul className="page-number-list" role="list">
                {renderPageNumbers()}
            </ul>
        </main>

    )

}


export default OfertasScreen