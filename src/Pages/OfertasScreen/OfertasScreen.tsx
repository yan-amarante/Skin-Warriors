import "./OfertasScreen.css"

import SkinCard from "../../Components/SkinCard"

import { useState, useEffect, useRef } from "react"

import Close from "../../Components/Icons/Close"

import Input from "../../Components/Input"

import Button from "../../Components/Button"


const API_LIST_SALES: string = "https://api-skin-warriors.onrender.com/sales/list-sales"

const API_SEARCH_CATEGORIES: string = "https://api-skin-warriors.onrender.com/skins/search-categories"

const API_POST_SALE: string = "https://api-skin-warriors.onrender.com/sales/create-sale"


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

type formInfos = {

    image: string | null | undefined;

    pattern: string | null | undefined;

    wear: string | null | undefined;

    price: number | null | undefined;

    category: string | null | undefined;

    name: string | null | undefined;

}


function OfertasScreen() {

    const [sales, setSales] = useState<Sale[] | null>(null)

    const [createSale, setCreateSale] = useState<boolean>(false)

    const [categories, setCategories] = useState<Categories[] | null>(null)

    const [formInfos, setformInfos] = useState<formInfos>({

        image: null,

        pattern: null,

        wear: null,

        price: null,

        category: null,

        name: null

    })


    const categoriesSelect = useRef<HTMLSelectElement>(null)

    const nameSelect = useRef<HTMLSelectElement>(null)

    const patternNameSelect = useRef<HTMLSelectElement>(null)

    const wearSelect = useRef<HTMLSelectElement>(null)

    const priceSelect = useRef<HTMLInputElement>(null)

    const imageSrc = useRef<HTMLImageElement>(null)


    useEffect(() => {

        listSales()

    }, [])

    useEffect(() => {

        fetchCategories()

        updateFormInfos("name", nameSelect.current?.value)

    }, [formInfos.category])

    useEffect(() => {

        updateFormInfos("image", imageSrc.current?.src)

    }, [imageSrc.current?.src])


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

        const ENDPOINT = `${API_SEARCH_CATEGORIES}?patterns=${formInfos.category}`

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

            if (item.categoryName === formInfos.category) {

                return Object.keys(item.weapons).map((item: any) => {

                    return <option value={item}>{item}</option>

                })

            }

        })

    }

    function updateFormInfos(keyName: string, value: string | number | undefined) {

        setformInfos((prevState) => ({ ...prevState, [keyName]: value }))

    }

    function renderSkinsPatterns() {

        return categories?.map((item: any) => {

            if (item.categoryName === formInfos.category) {

                if (formInfos.name && item.weapons[formInfos.name] !== undefined) {

                    return Object.keys(item.weapons[formInfos.name]).map((item: any) => {

                        if (!null) return <option value={item}>{item}</option>

                    })

                }

            }

        })

    }

    function renderSkinsWears() {

        return categories?.map((item: any) => {

            if (item.categoryName === formInfos.category && categories !== null) {

                if (formInfos.name && formInfos.pattern) {

                    return item.weapons[formInfos.name][formInfos.pattern].wears.map((item: any) => {

                        if (!null) return <option value={item.name}>{item.name}</option>

                    })

                }

            }

        })

    }

    function renderSkinImage(): string {

        const skinImage = categories?.map((item: any) => {

            if (formInfos.name && formInfos.pattern) {

                return item.weapons[formInfos.name]?.[formInfos.pattern]?.image || null

            }

            return null

        })

        const validSkinImage = (skinImage ?? []).filter(image => image !== null && image !== undefined)[0]

        return validSkinImage || ""

    }

    async function sendSale() {

            const config: any = {

                method: "POST",

                body: JSON.stringify({

                    image: formInfos.image,

                    name: formInfos.name,

                    pattern: formInfos.pattern,

                    wear: formInfos.wear,

                    price: formInfos.price,

                    category: formInfos.category,

                }),

                headers: {

                    "Content-Type": "application/json",

                    "Access-Control-Allow-Origin": "*",

                    "mode": "no-cors"

                }

            }
        
        await fetch(API_POST_SALE, config)

        alert("sucesso")

    }

    function renderCreateSaleForm() {

        if (createSale) {

            return (

                <section onClick={() => console.log(formInfos)} className="elements-background create-sale-container">
                    <Close onClick={updateCreateSale} className="close-create-sale" />
                    <form className="create-sale-form">
                        <h3 className="input-label">Categorias</h3>
                        <select onChange={() => updateFormInfos("category", categoriesSelect.current?.value)} ref={categoriesSelect} name="categories" id="">
                            <option value="default">Selecione uma categoria</option>
                            {renderCategoriesOptions()}
                        </select>
                        <h3 className="input-label">Nome</h3>
                        <select onChange={() => updateFormInfos("name", nameSelect.current?.value)} ref={nameSelect} name="name" id="">
                            {renderSkinsNameOptions()}
                        </select>
                        <h3 className="input-label">Pintura</h3>
                        <select onChange={() => updateFormInfos("pattern", patternNameSelect.current?.value)} ref={patternNameSelect} name="pattern" id="">
                            {renderSkinsPatterns()}
                        </select>
                        <h3 className="input-label">Qualidade</h3>
                        <select onChange={() => updateFormInfos("wear", wearSelect.current?.value)} ref={wearSelect} name="wear" id="">
                            {renderSkinsWears()}
                        </select>
                        <input onChange={() => updateFormInfos("price", priceSelect.current?.value)} ref={priceSelect} type="text" />
                        <img src={renderSkinImage()} ref={imageSrc} alt="" />
                    </form>
                    <button onClick={sendSale} className="cta-button-home cta-button-text">Publicar Oferta</button>
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