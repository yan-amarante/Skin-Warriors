import { createContext, useState, Dispatch, SetStateAction } from "react";


type SalesFiltersProviderProps = {

    children: React.ReactNode;

}

type SalesFilters = {

    currentWeapon: string | undefined;

    currentPage: string | undefined;

    currentWear: string | undefined;

}

export type SalesFiltersContextType = {

    salesFilters: SalesFilters | undefined;

    setSalesFilters: Dispatch<SetStateAction<any>>;

}


const salesFiltersContext = createContext<SalesFiltersContextType | undefined>(undefined);


function SalesFiltersProvider({ children }: SalesFiltersProviderProps) {

    const [salesFilters, setSalesFilters] = useState<SalesFilters>({

        currentWeapon: undefined,

        currentPage: "1",

        currentWear: undefined

    })


    return (

        <salesFiltersContext.Provider value={{ salesFilters, setSalesFilters }}>{children}</salesFiltersContext.Provider>

    )

}


export { salesFiltersContext, SalesFiltersProvider }