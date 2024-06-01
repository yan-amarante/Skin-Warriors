import { useContext } from 'react'

import { salesFiltersContext } from '../../Context/salesFiltersContext'


function useUpdateFilters() {

    const salesFiltersContextValue = useContext(salesFiltersContext)

    if (!salesFiltersContextValue) throw new Error("usesalesFiltersContext deve ser usado dentro de um salesFiltersProvider")

    const { salesFilters, setSalesFilters } = salesFiltersContextValue


    function verifyIfHasActiveFilter(wear: string) {

        if (salesFilters !== undefined) {

            const wears = Object.values(salesFilters)


            return wears.find((currentWear) => currentWear === wear)

        }

    }

    function updateFilterContext(type: 'weapon' | 'wear' | 'page', value: string) {

        if (type === 'weapon') {

            if (!salesFilters?.currentWeapon && !verifyIfHasActiveFilter(value)) {

                setSalesFilters((prevObject: any) => ({ ...prevObject, currentWeapon: value, currentPage: "1" }))

            } else if (salesFilters?.currentWeapon !== undefined && value !== salesFilters?.currentWeapon) {

                setSalesFilters((prevObject: any) => ({ ...prevObject, currentWeapon: value, currentPage: "1" }))

            } else if (salesFilters?.currentWeapon !== undefined && value === salesFilters?.currentWeapon) {

                setSalesFilters((prevObject: any) => ({ ...prevObject, currentWeapon: undefined, currentPage: "1" }))

            }

        } else if (type === 'wear') {

            if (!salesFilters?.currentWear && !verifyIfHasActiveFilter(value)) {

                setSalesFilters((prevObject: any) => ({ ...prevObject, currentWear: value, currentPage: "1" }))

            } else if (salesFilters?.currentWear !== undefined && value !== salesFilters?.currentWear) {

                setSalesFilters((prevObject: any) => ({ ...prevObject, currentWear: value, currentPage: "1" }))

            } else if (salesFilters?.currentWear !== undefined && value === salesFilters?.currentWear) {

                setSalesFilters((prevObject: any) => ({ ...prevObject, currentWear: undefined, currentPage: "1" }))

            }

        } else if (type === 'page') {

            if (value !== salesFilters?.currentPage) {

                if (salesFilters?.currentWear !== undefined && salesFilters?.currentWeapon === undefined) {

                    setSalesFilters((prevObject: any) => ({ ...prevObject, currentPage: value }))

                }

                else if (salesFilters?.currentWear && salesFilters?.currentWeapon !== undefined) {

                    setSalesFilters((prevObject: any) => ({ ...prevObject, currentPage: value }))

                }

                else if (salesFilters?.currentWear === undefined && salesFilters?.currentWeapon !== undefined) {

                    setSalesFilters((prevObject: any) => ({ ...prevObject, currentPage: value }))

                }
                else {

                    setSalesFilters((prevObject: any) => ({ ...prevObject, currentPage: value }))

                }

            }

        }

    }

    return updateFilterContext

}


export default useUpdateFilters
