import "./OfertasScreen.css"

import { useState, useEffect, useContext } from "react"

import CreateSale from "../../Components/CreateSale"

import SalesInfoFilter from "../../Components/SalesInfoFilter"

import SalesCategoriesFilter from "../../Components/SalesCategoriesFilter"

import PagesNumber from "../../Components/PagesNumber"

import { salesFiltersContext } from "../../Context/salesFiltersContext"

import useFetch from "../../Hooks/useFetch"

import useArray from "../../Hooks/useArray"

import SalesList from "../../Components/SalesList"


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

    const { salesFilters } = salesFiltersContextValue

    const [fetchData, setUrl] = useFetch<Sale>();

    const [sales, setSales] = useState<Sale[] | null>(null)

    const [createSale, setCreateSale] = useState<boolean>(false)


    useEffect(() => {

        fetchByfilters()

    }, [salesFilters, setUrl])

    useEffect(() => {

        listSales()

    }, [fetchData])


    function fetchByfilters() {

        if (!salesFilters) return


        let url = `${API_LIST_SALES}${salesFilters.currentPage}`


        if (salesFilters.currentWear !== undefined) url += `&wear=${salesFilters.currentWear}`

        if (salesFilters.currentWeapon !== undefined) url += `&name=${salesFilters.currentWeapon}`


        setSales(null)

        setUrl(url)

    }

    function listSales() {

        useArray(fetchData, setSales)

    }

    function returnNumberOfPages() {

        if (sales !== null) return sales[sales.length - 1]

    }


    return (

        <main className="sales-container">
            <SalesCategoriesFilter updateCreateSaleState={setCreateSale} />
            <SalesInfoFilter />
            <SalesList salesState={sales} />
            {createSale && <CreateSale updateState={setCreateSale} />}
            <PagesNumber numberOfPages={returnNumberOfPages()} />
        </main>

    )

}


export default OfertasScreen