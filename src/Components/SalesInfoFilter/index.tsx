import "./styles.css"

import CheckBox from "../../Components/CheckBox"

import Dropdown from "../../Components/Dropdown"

import { useContext } from "react"

import { salesFiltersContext } from "../../Context/salesFiltersContext"


function SalesInfoFilter() {

    const viewportWidth = window.innerWidth

    const salesFiltersContextValue = useContext(salesFiltersContext)


    if (!salesFiltersContextValue) throw new Error("usesalesFiltersContext deve ser usado dentro de um salesFiltersProvider")



    const { salesFilters, setSalesFilters } = salesFiltersContextValue


    function verifyIfHasActiveFilter(wear: string) {

        if (salesFilters !== undefined) {

            const wears = Object.values(salesFilters)


            return wears.find((currentWear) => currentWear === wear)

        }

    }

    function updateWearState(wear: string) {

        if (!salesFilters?.currentWear && !verifyIfHasActiveFilter(wear)) {

            if (salesFilters?.currentWeapon === undefined) {

                setSalesFilters((prevObject: any) => ({ ...prevObject, currentWear: wear }))

            }

            else if (salesFilters?.currentWeapon !== undefined) {


                setSalesFilters((prevState: any) => ({ ...prevState, currentWear: wear }))

            }

        }


        else if (salesFilters?.currentWeapon !== undefined && salesFilters?.currentWear) {

            setSalesFilters((prevState: any) => ({ ...prevState, currentWear: undefined }))


        }

        else if (salesFilters?.currentWeapon === undefined && salesFilters?.currentWear) {

            setSalesFilters((prevState: any) => ({ ...prevState, currentWear: undefined }))

        }

    }

    function renderFilterOptions() {

        return (
            <>
                <h2 className="input-label">Desgaste</h2>
                <CheckBox state={salesFilters?.currentWear} updateState={() => updateWearState("Nova de Fábrica")} title="Nova de Fábrica" />
                <CheckBox state={salesFilters?.currentWear} updateState={() => updateWearState("Pouco Usada")} title="Pouco Usada" />
                <CheckBox state={salesFilters?.currentWear} updateState={() => updateWearState("Testada em Campo")} title="Testada em Campo" />
                <CheckBox state={salesFilters?.currentWear} updateState={() => updateWearState("Bem Desgastada")} title="Bem Desgastada" />
                <CheckBox state={salesFilters?.currentWear} updateState={() => updateWearState("Veterana de Guerra")} title="Veterana de Guerra" />
            </>
        )

    }


    return (
        <>
            {viewportWidth < 1366 ? <Dropdown options={renderFilterOptions()} /> :
                <section className="elements-background skins-filters-container">
                    <h2 className="input-label">Desgaste</h2>
                    <CheckBox state={salesFilters?.currentWear} updateState={() => updateWearState("Nova de Fábrica")} title="Nova de Fábrica" />
                    <CheckBox state={salesFilters?.currentWear} updateState={() => updateWearState("Pouco Usada")} title="Pouco Usada" />
                    <CheckBox state={salesFilters?.currentWear} updateState={() => updateWearState("Testada em Campo")} title="Testada em Campo" />
                    <CheckBox state={salesFilters?.currentWear} updateState={() => updateWearState("Bem Desgastada")} title="Bem Desgastada" />
                    <CheckBox state={salesFilters?.currentWear} updateState={() => updateWearState("Veterana de Guerra")} title="Veterana de Guerra" />
                </section>
            }
        </>
    )

}

export default SalesInfoFilter