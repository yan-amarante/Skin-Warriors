import "./OfertasScreen.css"

import SkinCard from "../../Components/SkinCard"

import { useState, useEffect } from "react"

import CreateSale from "../../Components/CreateSale"

import Button from "../../Components/Button"

import Dropdown from "../../Components/Dropdown"

import CheckBox from "../../Components/CheckBox"


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

    const viewportWidth = window.innerWidth


    const [sales, setSales] = useState<Sale[] | null>(null)

    const [createSale, setCreateSale] = useState<boolean>(false)

    const [categories, setCategories] = useState<any>(null)

    const [wearFilter, setWearFilter] = useState<any>({

        "Nova de Fábrica": false,

        "Pouco Usada": false,

        "Testada em Campo": false,

        "Bem Desgastada": false,

        "Veterana de Guerra": false

    })

    const [selectedWeapon, setSelectedWeapon] = useState<any>(null)

    const [currentPage, setCurrentPage] = useState<any>(null)


    useEffect(() => {

        listSales(API_LIST_SALES + "1")

        listCategories()

        updateCurrentPage("1")

    }, [])


    function updateCurrentPage(currentPage: string) {

        setCurrentPage(currentPage)

    }

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

        let wear = null

        Object.entries(wearFilter).forEach((item) => {

            if (item[1] === true) {

                wear = item[0]
            }

        })

        if (wear !== null && selectedWeapon === null) {

            listSales(API_LIST_SALES + `${pageNumber}&wear=${wear}`); setCurrentPage(pageNumber)

            setCurrentPage(pageNumber)

        }

        else if (wear && selectedWeapon !== null) {

            listSales(API_LIST_SALES + `${pageNumber}&name=${selectedWeapon}&wear=${wear}`)

            setCurrentPage(pageNumber)

        }

        else if (wear === null && selectedWeapon !== null) {

            listSales(API_LIST_SALES + `${pageNumber}&name=${selectedWeapon}`)

            setCurrentPage(pageNumber)

        }
        else {

            listSales(API_LIST_SALES + pageNumber)

            setCurrentPage(pageNumber)

        }

    }

    function verifyCurrentPage(buttonPage: string) {

        if (currentPage !== buttonPage) return "disabled-button"

        else return null

    }

    function renderPageNumbers() {

        const totalOfPages: any = sales !== null ? sales[sales.length - 1] : 0

        const numberOfPages = []

        for (let i = 1; i <= totalOfPages; i++) {

            numberOfPages.push(i)

        }

        return numberOfPages.map((item) => {

            return <li className="page-list-items">
                <Button onClick={() => changePage(String(item))} className={`page-button ${verifyCurrentPage(String(item))}`} title={String(item)} />
            </li>

        })


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

    function updateCategoryState(weapon: string) {

        let currentWear = null

        const wears = Object.entries(wearFilter)

        wears.forEach((wear) => {

            if (wear[1] === true) currentWear = wear[0]

        })

        if (selectedWeapon === null && currentWear === null) {

            setSelectedWeapon(weapon)

            listSales(API_LIST_SALES + `1&name=${weapon}`)

        }

        else if (selectedWeapon === null && currentWear !== null) {

            setSelectedWeapon(weapon)

            listSales(API_LIST_SALES + `1&name=${weapon}&wear=${currentWear}`)

        }

        else if (selectedWeapon !== null && currentWear === null) {


            if (weapon !== selectedWeapon) {

                setSelectedWeapon(weapon)

                listSales(API_LIST_SALES + `1&name=${weapon}`)

            } else {

                setSelectedWeapon(null)

                listSales(API_LIST_SALES + "1")

            }

        }

        else if (selectedWeapon && currentWear !== null) {

            if (weapon !== selectedWeapon) {

                setSelectedWeapon(weapon)

                listSales(API_LIST_SALES + `1&name=${weapon}&wear=${currentWear}`)

            } else {

                setSelectedWeapon(null)

                listSales(API_LIST_SALES + `1&wear=${currentWear}`)

            }

        }

    }

    function verifyIfActive(weapon: string) {

        if (weapon === selectedWeapon) return "enabled-weapon"

        else if (weapon !== selectedWeapon) return "disabled-weapon"

    }

    function renderCategoriesOptions(weapons: any) {

        return weapons.map((item: any) => {

            return <h2 onClick={() => updateCategoryState(item)} className={`input-label ${verifyIfActive(item)}`}>{item}</h2>

        })

    }

    function renderCategories() {

        return categories?.map((item: any) => {

            return <Dropdown title={item.categoryName} options={renderCategoriesOptions(Object.keys(item.weapons))} />

        })

    }

    function verifyIfHasActiveFilter() {

        const wears = Object.values(wearFilter)


        return wears.find((wear) => wear === true)

    }

    function updateWearState(wear: string) {

        const pageNumber: string = "1"

        const wearParam: string = `wear=${wear}`

        const weaponNameParam: string = `name=${selectedWeapon}`


        if (!wearFilter[wear] && !verifyIfHasActiveFilter()) {

            if (selectedWeapon === null) {

                const API_URL = `${API_LIST_SALES}${pageNumber}&${wearParam}`


                setWearFilter((prevObject: any) => ({ ...prevObject, [wear]: true }))

                listSales(API_URL)

            }

            else if (selectedWeapon !== null) {

                const API_URL = `${API_LIST_SALES}${pageNumber}&${weaponNameParam}&${wearParam}`


                setWearFilter((prevState: any) => ({ ...prevState, [wear]: true }))

                listSales(API_URL)

            }

        }


        else if (selectedWeapon !== null) {

            const API_URL = `${API_LIST_SALES}${pageNumber}&${weaponNameParam}`


            listSales(API_URL)

            setWearFilter((prevState: any) => ({ ...prevState, [wear]: false }))

        }

        else if (selectedWeapon === null) {

            const API_URL = `${API_LIST_SALES}${pageNumber}`


            setWearFilter((prevState: any) => ({ ...prevState, [wear]: false }))

            listSales(API_URL)

        }

    }

    function renderFilterOptions() {

        return (
            <>
                <h2 className="input-label">Desgaste</h2>
                <CheckBox state={wearFilter["Nova de Fábrica"]} updateState={() => updateWearState("Nova de Fábrica")} title="Nova de Fábrica" />
                <CheckBox state={wearFilter["Pouco Usada"]} updateState={() => updateWearState("Pouco Usada")} title="Pouco Usada" />
                <CheckBox state={wearFilter["Testada em Campo"]} updateState={() => updateWearState("Testada em Campo")} title="Testada em Campo" />
                <CheckBox state={wearFilter["Bem Desgastada"]} updateState={() => updateWearState("Bem Desgastada")} title="Bem Desgastada" />
                <CheckBox state={wearFilter["Veterana de Guerra"]} updateState={() => updateWearState("Veterana de Guerra")} title="Veterana de Guerra" />
            </>
        )
    }

    return (

        <main className="sales-container">
            {viewportWidth < 1366 ?
                <Dropdown options={renderFilterOptions()} /> :
                <section className="elements-background skins-filters-container">
                    <h2 className="input-label">Desgaste</h2>
                    <CheckBox state={wearFilter["Nova de Fábrica"]} updateState={() => updateWearState("Nova de Fábrica")} title="Nova de Fábrica" />
                    <CheckBox state={wearFilter["Pouco Usada"]} updateState={() => updateWearState("Pouco Usada")} title="Pouco Usada" />
                    <CheckBox state={wearFilter["Testada em Campo"]} updateState={() => updateWearState("Testada em Campo")} title="Testada em Campo" />
                    <CheckBox state={wearFilter["Bem Desgastada"]} updateState={() => updateWearState("Bem Desgastada")} title="Bem Desgastada" />
                    <CheckBox state={wearFilter["Veterana de Guerra"]} updateState={() => updateWearState("Veterana de Guerra")} title="Veterana de Guerra" />
                </section>
            }
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