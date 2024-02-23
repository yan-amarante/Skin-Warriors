import "./styles.css"

import CheckBox from "../../Components/CheckBox"

import { useContext, useState } from "react"

import { salesFiltersContext } from "../../Context/salesFiltersContext"

import Close from "../Icons/Close"


function SalesInfoFilter() {

    const viewportWidth = window.innerWidth

    const salesFiltersContextValue = useContext(salesFiltersContext)


    if (!salesFiltersContextValue) throw new Error("usesalesFiltersContext deve ser usado dentro de um salesFiltersProvider")



    const { salesFilters, setSalesFilters } = salesFiltersContextValue


    const [filters, setFilters] = useState<boolean>(false)


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

    function toggleFilters() {

        if (!filters) setFilters(true)

        else if (filters) setFilters(false)

    }

    function changeClassnameIfToggled() {

        if (filters) return "filters-mobile-enabled"

        else if (!filters) return "filters-mobile-disbled"
    }

    return (
        <>
            {viewportWidth < 1366 ?
                <section onClick={toggleFilters} className="button-toggle-filters">
                    <FilterIcon />
                    <section className={changeClassnameIfToggled()}>
                        <Close className="close-icon-filters" onClick={toggleFilters} />
                        {renderFilterOptions()}
                    </section>
                </section>
                :
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

function FilterIcon() {

    return (
        <svg className="filter-icon" width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 153.333C100 134.665 100 125.331 103.633 118.2C106.829 111.928 111.928 106.829 118.2 103.633C125.331 100 134.665 100 153.333 100H646.667C665.337 100 674.67 100 681.8 103.633C688.073 106.829 693.17 111.928 696.367 118.2C700 125.331 700 134.665 700 153.333V211.242C700 219.395 700 223.471 699.08 227.308C698.263 230.709 696.917 233.96 695.087 236.943C693.027 240.307 690.143 243.189 684.38 248.954L482.287 451.047C476.523 456.81 473.64 459.693 471.58 463.057C469.75 466.04 468.403 469.29 467.587 472.693C466.667 476.53 466.667 480.607 466.667 488.757V566.667L333.333 700V488.757C333.333 480.607 333.333 476.53 332.412 472.693C331.596 469.29 330.249 466.04 328.421 463.057C326.36 459.693 323.477 456.81 317.712 451.047L115.621 248.954C109.856 243.189 106.973 240.307 104.912 236.943C103.084 233.96 101.738 230.709 100.921 227.308C100 223.471 100 219.395 100 211.242V153.333Z" stroke="currentColor" stroke-width="66.6667" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export default SalesInfoFilter