import { createContext, useState, Dispatch, SetStateAction, useEffect } from "react";


type NavigationProviderProps = {

    children: React.ReactNode;

}

export type NavigationContextType = {

    currentPage: string;

    setCurrentPage: Dispatch<SetStateAction<string>>;

}

type pages = {

    home: string;

    ofertas: string;

}


const navigationContext = createContext<NavigationContextType | undefined>(undefined);


function NavigationProvider({ children }: NavigationProviderProps) {

    const pages: pages = {

        home: "/",

        ofertas: "/ofertas",

    }


    const [currentPage, setCurrentPage] = useState("/")


    useEffect(() => {

        updateFirstInitialization()

    }, [])


    function updateFirstInitialization():void {

        const currentUrl: string = window.location.href

        const currentUrlValidation: string | undefined = Object.values(pages).find((page: string) => currentUrl.endsWith(page))

        if (currentUrlValidation !== undefined) setCurrentPage(currentUrlValidation)

    }

    
    return (

        <navigationContext.Provider value={{ currentPage, setCurrentPage }}>{children}</navigationContext.Provider>

    )

}


export { navigationContext, NavigationProvider }