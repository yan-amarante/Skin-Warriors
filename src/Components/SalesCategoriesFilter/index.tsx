import "./styles.css"

import { useState, useEffect, useContext } from "react"

import { Sale } from "../../Pages/OfertasScreen/OfertasScreen"

import Dropdown from "../Dropdown"

import { salesFiltersContext } from "../../Context/salesFiltersContext"


const API_SEARCH_CATEGORIES: string = "https://api-skin-warriors.onrender.com/skins/search-categories"


function SalesCategoriesFilter({ updateCreateSaleState }: any) {

    const salesFiltersContextValue = useContext(salesFiltersContext)


    if (!salesFiltersContextValue) throw new Error("usesalesFiltersContext deve ser usado dentro de um salesFiltersProvider")


    const { salesFilters, setSalesFilters } = salesFiltersContextValue


    const [categories, setCategories] = useState<any>(null)


    useEffect(() => {

        listCategories()

    }, [])


    async function listCategories() {

        const response: Response = await fetch(API_SEARCH_CATEGORIES)

        const data: Sale = await response.json()

        transformToArray(data, setCategories)

    }

    function transformToArray(object: Sale, updateState: any) {

        const array: any[] = Object.values(object)

        updateState(array)

    }

    function updateCreateSale() {

        updateCreateSaleState((prevCreateSale: any) => !prevCreateSale)

    }

    function updateCategoryState(weapon: string) {

        if (salesFilters?.currentWeapon === undefined && salesFilters?.currentWear === undefined) {

            setSalesFilters((prevObject: any) => ({ ...prevObject, currentWeapon: weapon, currentPage: "1" }))


        }

        else if (salesFilters?.currentWeapon === undefined && salesFilters?.currentWear !== undefined) {

            setSalesFilters((prevObject: any) => ({ ...prevObject, currentWeapon: weapon, currentPage: "1" }))


        }

        else if (salesFilters?.currentWeapon !== undefined && salesFilters?.currentWear === undefined) {


            if (weapon !== salesFilters?.currentWeapon) {

                setSalesFilters((prevObject: any) => ({ ...prevObject, currentWeapon: weapon, currentPage: "1" }))


            } else {

                setSalesFilters((prevObject: any) => ({ ...prevObject, currentWeapon: undefined, currentPage: "1" }))


            }

        }

        else if (salesFilters?.currentWeapon && salesFilters?.currentWear !== undefined) {

            if (weapon !== salesFilters?.currentWeapon) {

                setSalesFilters((prevObject: any) => ({ ...prevObject, currentWeapon: weapon, currentPage: "1" }))

            } else {

                setSalesFilters((prevObject: any) => ({ ...prevObject, currentWeapon: undefined, currentPage: "1" }))

            }

        }

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