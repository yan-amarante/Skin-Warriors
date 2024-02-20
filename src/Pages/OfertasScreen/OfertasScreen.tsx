import "./OfertasScreen.css"

import VerticalSkinCard from "../../Components/VerticalSkinCard"

import { useState, useEffect, useContext } from "react"

import CreateSale from "../../Components/CreateSale"

import SalesInfoFilter from "../../Components/SalesInfoFilter"

import SalesCategoriesFilter from "../../Components/SalesCategoriesFilter"

import PagesNumber from "../../Components/PagesNumber"

import { salesFiltersContext } from "../../Context/salesFiltersContext"


const API_LIST_SALES: string = "https://api-skin-warriors.onrender.com/sales/list-sales?page="


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

    const salesFiltersContextValue = useContext(salesFiltersContext)


    if (!salesFiltersContextValue) throw new Error("usesalesFiltersContext deve ser usado dentro de um salesFiltersProvider")



    const { salesFilters } = salesFiltersContextValue

    const [sales, setSales] = useState<Sale[] | null>(null)

    const [createSale, setCreateSale] = useState<boolean>(false)


    useEffect(() => {

        listSales(API_LIST_SALES + salesFilters?.currentPage)

    }, [])

    useEffect(() => {

        fetchByfilters()

    }, [salesFilters])


    function fetchByfilters() {

        if (salesFilters?.currentWear !== undefined && salesFilters?.currentWeapon === undefined) {

            listSales(`${API_LIST_SALES}${salesFilters?.currentPage}&wear=${salesFilters?.currentWear}`)

        }

        else if (salesFilters?.currentWear && salesFilters?.currentWeapon !== undefined) {

            listSales(`${API_LIST_SALES}${salesFilters?.currentPage}&wear=${salesFilters?.currentWear}&name=${salesFilters?.currentWeapon}`)

        }

        else if (salesFilters?.currentWear === undefined && salesFilters?.currentWeapon !== undefined) {

            listSales(`${API_LIST_SALES}${salesFilters?.currentPage}&name=${salesFilters?.currentWeapon}`)

        }
        else {

            listSales(`${API_LIST_SALES}${salesFilters?.currentPage}`)

        }

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
                    <VerticalSkinCard
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

    function renderCreateSaleComponent() {

        if (createSale) return <CreateSale updateState={setCreateSale} />

    }

    function renderSkeletonLoad() {

        const numberOfPages = []

        for (let i = 0; i < 14; i++) {

            numberOfPages.push(i)

        }

        return numberOfPages.map(() => {

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

    function returnNumberOfPages() {

        if (sales !== null) return sales[sales.length - 1]

    }


    return (

        <main className="sales-container">
            <SalesInfoFilter />
            <SalesCategoriesFilter updateCreateSaleState={setCreateSale} />
            <ul role="list" className="skins-list-container">
                {sales !== null ? renderSalesList() : renderSkeletonLoad()}
            </ul>
            {renderCreateSaleComponent()}
            <PagesNumber numberOfPages={returnNumberOfPages()} />
        </main>

    )

}


export default OfertasScreen