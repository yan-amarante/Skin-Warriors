import "./styles.css"

import CheckBox from "../../Components/CheckBox"

import { useContext } from "react"

import { salesFiltersContext } from "../../Context/salesFiltersContext"

import useUpdateFilters from "../../Hooks/useUpdateFilters"


function SalesInfoFilter() {

    const salesFiltersContextValue = useContext(salesFiltersContext)

    if (!salesFiltersContextValue) throw new Error("usesalesFiltersContext deve ser usado dentro de um salesFiltersProvider")

    const { salesFilters } = salesFiltersContextValue

    const updateWear = useUpdateFilters()


    function updateWearState(wear: string) {

        updateWear("wear", wear)

    }


    return (
        <>

            <section className="elements-background skins-filters-container">
                <h2 className="input-label">Desgaste</h2>
                <CheckBox state={salesFilters?.currentWear} updateState={() => updateWearState("Nova de Fábrica")} title="Nova de Fábrica" />
                <CheckBox state={salesFilters?.currentWear} updateState={() => updateWearState("Pouco Usada")} title="Pouco Usada" />
                <CheckBox state={salesFilters?.currentWear} updateState={() => updateWearState("Testada em Campo")} title="Testada em Campo" />
                <CheckBox state={salesFilters?.currentWear} updateState={() => updateWearState("Bem Desgastada")} title="Bem Desgastada" />
                <CheckBox state={salesFilters?.currentWear} updateState={() => updateWearState("Veterana de Guerra")} title="Veterana de Guerra" />
            </section>

        </>
    )

}

export default SalesInfoFilter