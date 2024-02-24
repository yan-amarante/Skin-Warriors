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

    id?: number;

    image: string;

    name: string;

    pattern: string;

    price: string | number;

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



    const { salesFilters, setSalesFilters } = salesFiltersContextValue

    const [sales, setSales] = useState<Sale[] | null>(null)

    const [createSale, setCreateSale] = useState<boolean>(false)


    useEffect(() => {

        fetchByfilters()

    }, [])

    useEffect(() => {

        fetchByfilters()

    }, [salesFilters])


    function fetchByfilters() {

        if (salesFilters?.currentWear !== undefined && salesFilters?.currentWeapon === undefined) {

            setSales(null)

            listSales(`${API_LIST_SALES}${salesFilters?.currentPage}&wear=${salesFilters?.currentWear}`)

        }

        else if (salesFilters?.currentWear && salesFilters?.currentWeapon !== undefined) {

            setSales(null)

            listSales(`${API_LIST_SALES}${salesFilters?.currentPage}&wear=${salesFilters?.currentWear}&name=${salesFilters?.currentWeapon}`)

        }

        else if (salesFilters?.currentWear === undefined && salesFilters?.currentWeapon !== undefined) {

            setSales(null)

            listSales(`${API_LIST_SALES}${salesFilters?.currentPage}&name=${salesFilters?.currentWeapon}`)

        }
        else {

            setSales(null)

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


        if (sales && sales?.length > 1) {

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

        } else return <section className="error-empty-query">
            <CautionIcon />
            <h2 className="error-text">A categoria requisitada não possui nenhum item cadastrado</h2>
        </section>

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
            <SalesCategoriesFilter updateCreateSaleState={setCreateSale} />
            <SalesInfoFilter />
            <ul role="list" className="skins-list-container">
                {sales !== null ? renderSalesList() : renderSkeletonLoad()}
            </ul>
            {renderCreateSaleComponent()}
            <PagesNumber numberOfPages={returnNumberOfPages()} />
        </main>

    )

}

function CautionIcon() {

    return (
        <svg className="caution-icon" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_17_34)">
                <path d="M385.08 0H375.688H282.118H229.88H126.92L0 126.929V229.88V282.119V385.069L126.92 512H229.88H282.118H385.08L512 385.07V282.12V229.88V126.929L385.08 0ZM466.68 229.88V282.119V366.296L366.296 466.67H282.118H229.88H145.704L45.34 366.296V282.12V229.88V145.682L145.704 45.33H229.88H282.118H366.296L466.68 145.682V229.88Z" fill="currentColor" />
                <path d="M284.53 125.07H227.47V292.925H284.53V125.07Z" fill="currentColor" />
                <path d="M284.53 333.226H227.47V386.94H284.53V333.226Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_17_34">
                    <rect width="512" height="512" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}


export default OfertasScreen