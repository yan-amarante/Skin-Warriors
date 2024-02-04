import { useState, useEffect, useRef } from "react"

import Close from "../../Components/Icons/Close"

import Dropdown from "../../Components/Dropdown"

import { Categories } from "../../Pages/OfertasScreen/OfertasScreen"


const API_SEARCH_CATEGORIES: string = "https://api-skin-warriors.onrender.com/skins/search-categories"

const API_POST_SALE: string = "https://api-skin-warriors.onrender.com/sales/create-sale"


type formInfos = {

    image: string | null | undefined;

    pattern: string | null | undefined;

    wear: string | null | undefined;

    price: number | null | undefined;

    category: string | null | undefined;

    name: string | null | undefined;

}

type CreateSaleProps = {

    updateState: React.Dispatch<React.SetStateAction<boolean>>;

}


function CreateSale({ updateState }: CreateSaleProps) {

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

        fetchCategories()

        updateFormInfos("name", categoriesSelect.current?.value)

    }, [formInfos.category]);


    useEffect(() => {

        updateFormInfos("image", imageSrc.current?.src)

    }, [imageSrc.current?.src])


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

                <h2 className="input-label" onClick={() => updateFormInfos("category", item.categoryName)}>{item.categoryName}</h2>

            )

        })

    }

    function renderSkinsNameOptions() {

        return categories?.map((item: any) => {

            if (item.categoryName === formInfos.category) {

                return Object.keys(item.weapons).map((item: any) => {

                    return <h2 className="input-label" onClick={() => updateFormInfos("name", item)}>{item}</h2>

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

                        if (!null) return <h2 className="input-label" onClick={() => updateFormInfos("pattern", item)}>{item}</h2>

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

                        if (!null) return <h2 className="input-label" onClick={() => updateFormInfos("wear", item.name)}>{item.name}</h2>

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

    return (

        <section className="elements-background create-sale-container">
            <Close onClick={() => updateState(false)} className="close-create-sale" />
            <form className="create-sale-form">
                <Dropdown title="Categorias" options={renderCategoriesOptions()} />
                <Dropdown title="Nome" options={renderSkinsNameOptions()} />
                <Dropdown title="Pintura" options={renderSkinsPatterns()} />
                <Dropdown title="Qualidade" options={renderSkinsWears()} />
                <input onChange={() => updateFormInfos("price", priceSelect.current?.value)} ref={priceSelect} type="text" />
                <img src={renderSkinImage()} ref={imageSrc} alt="" />
            </form>
            <button onClick={sendSale} className="cta-button-home cta-button-text">Publicar Oferta</button>
        </section>

    )

    return null

}


export default CreateSale