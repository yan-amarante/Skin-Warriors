import "./styles.css"

import { useState, useEffect, useRef } from "react"

import Dropdown from "../../Components/Dropdown"

import { Categories } from "../../Pages/OfertasScreen/OfertasScreen"

import Button from "../Button"

import Input from "../Input"


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


    const imageSrc = useRef<HTMLImageElement>(null)


    useEffect(() => {

        fetchCategories()

        updateFormInfos("pattern", undefined)

    }, [formInfos.category])


    useEffect(() => {

        updateFormInfos("image", imageSrc.current?.src)

    }, [imageSrc.current?.src])


    async function fetchCategories() {

        const ENDPOINT = `${API_SEARCH_CATEGORIES}?patterns=${formInfos.category}`

        const response: Response = await fetch(ENDPOINT)

        const data: Categories[] = await response.json()


        setCategories(Object.values(data))

    }

    function changeColorByState(currentState: string | undefined, state: string) {

        if (formInfos[currentState as keyof typeof formInfos] === state) return "enabled-weapon"

        else if (formInfos[currentState as keyof typeof formInfos] !== state) return "disabled-weapon";

    }

    function renderCategoriesOptions() {

        return categories?.map((item) => {

            return (

                <h2 className={`input-label-dropdown ${changeColorByState("category", item.categoryName)}`} onClick={() => updateFormInfos("category", item.categoryName)}>{item.categoryName}</h2>

            )

        })

    }

    function chooseKeyByParameter(key: string, item: any) {

        if (key === "name") {

            if (formInfos.category !== null) return item.weapons

        }

        else if (key === "pattern") {

            if (formInfos.name && item.weapons[formInfos.name] !== undefined) return item.weapons[formInfos.name]

            else return undefined

        }

    }

    function renderOptionsByCategory(key: string) {

        return categories?.map((item: any) => {

            if (item.categoryName === formInfos.category) {

                const iterateKey = chooseKeyByParameter(key, item)

                if (iterateKey !== undefined) {

                    return Object.keys(iterateKey).map((itemKey) => (

                        <h2 key={itemKey} className={`input-label-dropdown ${changeColorByState(key, itemKey)}`} onClick={() => updateFormInfos(key, itemKey)}>
                            {itemKey}
                        </h2>


                    ))

                } else return <h2>null</h2>

            }

        })

    }

    function renderSkinsNameOptions() {

        if (formInfos.category !== null) return renderOptionsByCategory("name")

    }

    function renderSkinsPatterns() {
        setTimeout(() => console.log("1"), 1000)
        if (formInfos.name !== undefined) return renderOptionsByCategory("pattern")

    }

    function updateFormInfos(keyName: string, value: string | number | undefined) {

        setformInfos((prevState) => ({ ...prevState, [keyName]: value }))

    }

    function renderSkinsWears() {

        return categories?.map((item: any) => {

            if (item.categoryName === formInfos.category && categories !== undefined) {

                if (formInfos.name && formInfos.pattern) {

                    if (item.weapons[formInfos.name] !== undefined) {

                        if (item.weapons[formInfos.name][formInfos.pattern].wears !== undefined) {

                            return item.weapons[formInfos.name][formInfos.pattern].wears.map((item: any) => {

                                if (!null) return <h2 className={`input-label-dropdown ${changeColorByState("wear", item.name)}`} onClick={() => updateFormInfos("wear", item.name)}>{item.name}</h2>

                            })

                        }

                    } else return <h2>null</h2>

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
            <form className="create-sale-form">
                <Dropdown title="Categorias" options={renderCategoriesOptions()} />
                <Dropdown title="Nome" options={renderSkinsNameOptions()} />
                <Dropdown title="Pintura" options={renderSkinsPatterns()} />
                <img className="skin-preview" src={renderSkinImage()} ref={imageSrc} alt="" />
                <Dropdown title="Qualidade" options={renderSkinsWears()} />
                <Input title="Preço" onChange={(e: any) => updateFormInfos("price", e.target.value)} />
            </form>
            <section className="buttons-container">
                <Button title="Publicar Oferta" onClick={sendSale} />
                <Button title="Cancelar" onClick={() => updateState(false)} />
            </section>
        </section>

    )

    return null

}


export default CreateSale