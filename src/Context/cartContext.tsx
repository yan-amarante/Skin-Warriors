import { createContext, useState, Dispatch, SetStateAction } from "react";

import { Sale } from "../Pages/OfertasScreen/OfertasScreen";


type CartProviderProps = {

    children: React.ReactNode;

}

export type CartContextType = {

    skin: Sale[] | null;

    setSkin: Dispatch<SetStateAction<any>>;

}


const cartContext = createContext<CartContextType | undefined>(undefined);


function CartProvider({ children }: CartProviderProps) {

    const [skin, setSkin] = useState([])

    
    return (

        <cartContext.Provider value={{ skin, setSkin }}>{children}</cartContext.Provider>

    )

}


export { cartContext, CartProvider }