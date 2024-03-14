import "./styles.css"

import Dropdown from "../../Components/Dropdown"

import Input from "../Input"

import { useState, useEffect, useRef } from "react"

import { formInfos } from "../CreateSale"

import { Categories } from "../../Pages/OfertasScreen/OfertasScreen"


const API_SEARCH_CATEGORIES: string = "https://api-skin-warriors.onrender.com/skins/search-categories"


type CreateSaleFormProps = {

    formInfos: formInfos;

    updateFormInfos: (keyName: string, value: string | number | undefined) => void;

}


function CreateSaleForm({ formInfos, updateFormInfos }: CreateSaleFormProps) {

    const [categories, setCategories] = useState<Categories[] | null>(null)


    const imageSrc = useRef<HTMLImageElement>(null)


    useEffect(() => {

        fetchCategories()

    }, [formInfos.category])

    useEffect(() => {

        fetchCategories()

    }, [])

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

    function renderOptionsByCategory(key: string): JSX.Element[] | null {

        return categories?.flatMap((item: any) => {

            if (item.categoryName === formInfos.category) {

                const iterateKey = chooseKeyByParameter(key, item)

                if (iterateKey !== undefined) {

                    return Object.keys(iterateKey).map((itemKey) => (

                        <h2 key={itemKey} className={`input-label-dropdown ${changeColorByState(key, itemKey)}`} onClick={() => updateFormInfos(key, itemKey)}>
                            {itemKey}
                        </h2>

                    ))

                }

            }

            return []

        }) ?? null

    }

    function renderSkinsNameOptions() {

        if (formInfos.category !== null) return renderOptionsByCategory("name")

    }

    function renderSkinsPatterns() {

        if (formInfos.name !== undefined) return renderOptionsByCategory("pattern")

    }


    function renderSkinsWears() {

        return categories?.flatMap((item: any) => {

            if (
                item.categoryName === formInfos.category &&
                formInfos.name &&
                formInfos.pattern &&
                item.weapons[formInfos.name]?.[formInfos.pattern]?.wears !== undefined
            ) {
                return item.weapons[formInfos.name][formInfos.pattern].wears.map((wear: { name: string }) => (
                    <h2 key={wear.name} className={`input-label-dropdown ${changeColorByState("wear", wear.name)}`} onClick={() => updateFormInfos("wear", wear.name)}>
                        {wear.name}
                    </h2>
                ))
            }
            return []
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

    return (

        <section className="create-sale-form">
            <Dropdown title="Categorias" options={renderCategoriesOptions()} />
            <Dropdown title="Nome" options={renderSkinsNameOptions()} />
            <Dropdown title="Pintura" options={renderSkinsPatterns()} />
            <img className="skin-preview" src={renderSkinImage()} ref={imageSrc} alt="" />
            <Dropdown title="Qualidade" options={renderSkinsWears()} />
            <Input classname="input-width" title="Preço" onChange={(e: any) => updateFormInfos("price", e.target.value)} />
        </section>

    )

}


export default CreateSaleForm
