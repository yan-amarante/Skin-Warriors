import "./styles.css"

import { useState, useEffect, useContext } from "react"

import Dropdown from "../Dropdown"

import { salesFiltersContext } from "../../Context/salesFiltersContext"

import useUpdateFilters from "../../Hooks/useUpdateFilters"

import useFetch from "../../Hooks/useFetch"

import useArray from "../../Hooks/useArray"



const API_SEARCH_CATEGORIES: string = "https://api-skin-warriors-production.up.railway.app/skins/search-categories"


function SalesCategoriesFilter({ updateCreateSaleState }: any) {

    const salesFiltersContextValue = useContext(salesFiltersContext)

    if (!salesFiltersContextValue) throw new Error("usesalesFiltersContext deve ser usado dentro de um salesFiltersProvider")

    const { salesFilters } = salesFiltersContextValue

    const [categories, setCategories] = useState<any>(null)

    const updateCategory = useUpdateFilters()

    const [fetchValue, fetchEndpoint] = useFetch<any>()


    useEffect(() => {

        listCategories()

    }, [])

    useEffect(() => {

        transformToArray()

    }, [fetchValue])


    async function listCategories() {

        await fetchEndpoint(API_SEARCH_CATEGORIES)

    }

    function transformToArray() {

        useArray(fetchValue, setCategories)

    }

    function updateCreateSale() {

        updateCreateSaleState((prevCreateSale: any) => !prevCreateSale)

    }

    function updateCategoryState(weapon: string) {

        updateCategory("weapon", weapon)

    }

    function verifyIfActive(weapon: string) {

        if (weapon === salesFilters?.currentWeapon) return "enabled-weapon"

        else if (weapon !== salesFilters?.currentWeapon) return "disabled-weapon"

    }

    function renderCategoriesOptions(weapons: any) {

        return weapons.map((item: any) => {

            return <h2 onClick={() => updateCategoryState(item)} className={`input-label-dropdown ${verifyIfActive(item)}`}>{item}</h2>

        })

    }

    function renderCategories() {

        return categories?.map((item: any) => {

            return <Dropdown title={item.categoryName} options={renderCategoriesOptions(Object.keys(item.weapons))} />

        })

    }

    function renderSkeletonLoad() {

        return (
            <>
                <div className="skeleton-load-category"></div>
                <div className="skeleton-load-category"></div>
                <div className="skeleton-load-category"></div>
                <div className="skeleton-load-category"></div>
                <div className="skeleton-load-category"></div>
                <div className="skeleton-load-category"></div>
            </>
        )
    }

    return (

        <section className="elements-background skins-categories-container">
            <section className="categories-dropdowns-container">
                {categories === null ? renderSkeletonLoad() : renderCategories()}
            </section>
            <button onClick={() => updateCreateSale()} className="create-sale-button">Publicar Oferta</button>
        </section>

    )

}


export default SalesCategoriesFilter
