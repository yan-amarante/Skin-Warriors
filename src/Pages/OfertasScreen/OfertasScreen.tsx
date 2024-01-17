import "./OfertasScreen.css"

import SkinCard from "../../Components/SkinCard"

import { useState, useEffect, useRef } from "react"

import Close from "../../Components/Icons/Close"

import Input from "../../Components/Input"

import Button from "../../Components/Button"


const API_LIST_SALES: string = "https://api-skin-warriors.onrender.com/sales/list-sales"

const API_SEARCH_CATEGORIES: string = "https://api-skin-warriors.onrender.com/skins/search-categories"


export type Sale = {

    float: number;

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

    const [categories, setCategories] = useState<Categories[] | null>(null)

    const [currentCategory, setCurrentCategory] = useState<string | null | undefined>(null)

    const [currentWeaponName, setCurrentWeaponName] = useState<string | null | undefined>(null)

    const [currentPatternName, setCurrentPatternName] = useState<string | null | undefined>(null)


    const categoriesSelect = useRef<HTMLSelectElement>(null)

    const weaponNameSelect = useRef<HTMLSelectElement>(null)

    const patternNameSelect = useRef<HTMLSelectElement>(null)


    useEffect(() => {

        listSales()

    }, [])

    useEffect(() => {

        fetchCategories()

        updateCurrentSelectedWeaponName()

    }, [currentCategory])


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
                    float={sale.float}
                    image={sale.image}
                    name={sale.name}
                    pattern={sale.pattern}
                    price={sale.price}
                    wear={sale.wear}
                />
            </li>

        ))

    }

    function updateCreateSale() {

        setCreateSale((prevCreateSale) => !prevCreateSale)

    }

    async function fetchCategories() {

        const ENDPOINT = `${API_SEARCH_CATEGORIES}?patterns=${currentCategory}`

        const response: Response = await fetch(ENDPOINT)

        const data: Categories[] = await response.json()


        setCategories(Object.values(data))

    }

    function renderCategoriesOptions() {

        if (categories === null) {

            fetchCategories()

        }

        return categories?.map((item) => {

            return (

                <option value={item.categoryName}>{item.categoryName}</option>

            )

        })

    }

    function renderSkinsNameOptions() {

        return categories?.map((item: any) => {

            if (item.categoryName === currentCategory) {

                return Object.keys(item.weapons).map((item: any) => {

                    return <option value={item}>{item}</option>

                })

            }

        })

    }

    function updateCurrentSelectedOption() {

        setCurrentCategory(categoriesSelect.current?.value)

    }

    function updateCurrentSelectedWeaponName() {

        setCurrentWeaponName(weaponNameSelect.current?.value)

    }

    function updateCurrentSelectedPatternName() {

        setCurrentPatternName(patternNameSelect.current?.value)

    }

    function renderSkinsPatterns() {

        return categories?.map((item: any) => {

            if (item.categoryName === currentCategory) {

                if (currentWeaponName && item.weapons[currentWeaponName] !== undefined) {

                    return Object.keys(item.weapons[currentWeaponName]).map((item: any) => {

                        if (!null) return <option value={item}>{item}</option>

                    })

                }

            }

        })

    }

    function renderSkinsWears() {

        return categories?.map((item: any) => {

            if (item.categoryName === currentCategory && categories !== null) {

                if (currentWeaponName && currentPatternName) {

                    return item.weapons[currentWeaponName][currentPatternName].wears.map((item: any) => {

                        if (!null) return <option value={item.name}>{item.name}</option>

                    })

                }

            }

        })

    }

    function renderCreateSaleForm() {

        if (createSale) {

            return (

                <section className="elements-background create-sale-container">
                    <Close onClick={updateCreateSale} className="close-create-sale" />
                    <form className="create-sale-form">
                        <h3 className="input-label">Categorias</h3>
                        <select onChange={updateCurrentSelectedOption} ref={categoriesSelect} name="categories" id="">
                            <option value="default">Selecione uma categoria</option>
                            {renderCategoriesOptions()}
                        </select>
                        <h3 className="input-label">Nome</h3>
                        <select onChange={updateCurrentSelectedWeaponName} ref={weaponNameSelect} name="name" id="">
                            {renderSkinsNameOptions()}
                        </select>
                        <h3 className="input-label">Pintura</h3>
                        <select onChange={updateCurrentSelectedPatternName} ref={patternNameSelect} name="pattern" id="">
                            {renderSkinsPatterns()}
                        </select>
                        <h3 className="input-label">Qualidade</h3>
                        <select name="wear" id="">
                            {renderSkinsWears()}
                        </select>
                        <Input title="Preço" />
                    </form>
                    <button className="cta-button-home cta-button-text">Publicar Oferta</button>
                </section>

            )

        }

        return null

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
            {renderCreateSaleForm()}
            <section></section>
        </main>

    )

}


export default OfertasScreen