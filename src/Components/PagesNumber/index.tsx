import "./styles.css"

import Button from "../Button"

import { useContext } from "react"

import { salesFiltersContext } from "../../Context/salesFiltersContext"


function PagesNumber({ numberOfPages }: any) {

    const salesFiltersContextValue = useContext(salesFiltersContext)


    if (!salesFiltersContextValue) throw new Error("usesalesFiltersContext deve ser usado dentro de um salesFiltersProvider")


    const { salesFilters, setSalesFilters } = salesFiltersContextValue


    function changePage(pageNumber: string) {

        if (pageNumber !== salesFilters?.currentPage) {

            if (salesFilters?.currentWear !== undefined && salesFilters?.currentWeapon === undefined) {

                setSalesFilters((prevObject: any) => ({ ...prevObject, currentPage: pageNumber }))

            }

            else if (salesFilters?.currentWear && salesFilters?.currentWeapon !== undefined) {

                setSalesFilters((prevObject: any) => ({ ...prevObject, currentPage: pageNumber }))

            }

            else if (salesFilters?.currentWear === undefined && salesFilters?.currentWeapon !== undefined) {

                setSalesFilters((prevObject: any) => ({ ...prevObject, currentPage: pageNumber }))

            }
            else {

                setSalesFilters((prevObject: any) => ({ ...prevObject, currentPage: pageNumber }))

            }

        }

    }

    function verifyCurrentPage(buttonPage: string) {

        if (salesFilters?.currentPage === buttonPage) return true

        else return false

    }

    function renderPageNumbers() {

        const totalOfPages: any = numberOfPages

        const numberOfPagesForIteration = []

        for (let i = 1; i <= totalOfPages; i++) {

            numberOfPagesForIteration.push(i)

        }

        return numberOfPagesForIteration.map((item) => {

            if (salesFilters?.currentPage) {

                if (item >= (parseInt(salesFilters?.currentPage) - 2) && item <= (parseInt(salesFilters?.currentPage) + 2) || item === totalOfPages || item === ((totalOfPages - totalOfPages) + 1)) {

                    return <li className="page-list-items">
                        <Button isActive={verifyCurrentPage(String(item))} onClick={() => changePage(String(item))} className="page-button" title={String(item)} />
                    </li>

                }

            }

        })

    }

    return (
        <ul className="page-number-list" role="list">
            {renderPageNumbers()}
        </ul>
    )
}

export default PagesNumber