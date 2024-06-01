import "./styles.css"

import { useState, useEffect } from "react"

import Button from "../Button"

import CreateSaleForm from "../CreateSaleForm"


const API_POST_SALE: string = "https://api-skin-warriors.onrender.com/sales/create-sale"


interface FetchConfig {

    method: string

    body: string

    headers: {

        "Content-Type": string

        "Access-Control-Allow-Origin": string

    }

}

export type formInfos = {

    image: string | null | undefined;

    pattern: string | null | undefined;

    wear: string | null | undefined;

    price: string | null | undefined;

    category: string | null | undefined;

    name: string | null | undefined;

}

type CreateSaleProps = {

    updateState: React.Dispatch<React.SetStateAction<boolean>>;

}


function CreateSale({ updateState }: CreateSaleProps) {

    const [formInfos, setformInfos] = useState<formInfos>({

        image: null,

        pattern: null,

        wear: null,

        price: null,

        category: null,

        name: null

    })


    useEffect(() => {

        updateFormInfos("pattern", undefined)

    }, [formInfos.category])


    function updateFormInfos(keyName: string, value: string | number | undefined) {

        setformInfos((prevState) => ({ ...prevState, [keyName]: value }))

    }

    function replaceComma(price: any) {

        if (price !== undefined) {

            const numericPart = String(price).replace(/[^0-9,.]/g, '');

            return numericPart.replace(/,/g, '.');

        }

    }

    async function sendSale() {

        if (formInfos.image && formInfos.name && formInfos.pattern && formInfos.wear && formInfos.price && formInfos.category !== null || undefined) {

            const config: FetchConfig = {

                method: "POST",

                body: JSON.stringify({

                    image: formInfos.image,

                    name: formInfos.name,

                    pattern: formInfos.pattern,

                    wear: formInfos.wear,

                    price: replaceComma(formInfos.price),

                    category: formInfos.category,

                }),

                headers: {

                    "Content-Type": "application/json",

                    "Access-Control-Allow-Origin": "*",

                }

            }

            await fetch(API_POST_SALE, config)


            updateState(false)

        }

    }

    return (

        <section className="elements-background create-sale-container">
            <CreateSaleForm formInfos={formInfos} updateFormInfos={updateFormInfos} />
            <section className="buttons-container">
                <Button title="Publicar Oferta" onClick={sendSale} />
                <Button title="Cancelar" onClick={() => updateState(false)} />
            </section>
        </section>

    )

}


export default CreateSale
