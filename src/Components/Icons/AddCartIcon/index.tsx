import { useContext } from 'react'

import { cartContext } from '../../../Context/cartContext'

import { Sale } from '../../../Pages/OfertasScreen/OfertasScreen';


type AddCartIConProps = {

    className: string;

    skinProp: Sale;

}


function AddCartIcon({ className, skinProp }: AddCartIConProps) {

    const contextValue = useContext(cartContext);


    if (!contextValue) {

        throw new Error("useNavigationContext deve ser usado dentro de um NavigationProvider")

    }


    const { setSkin } = contextValue


    function addItemToCart() {

        setSkin((prevState: Sale[]) => ([ ...prevState, skinProp ]))
        
    }

    return (

        <svg onClick={addItemToCart} className={className} width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.44444 13.7059H12.4444C12.9333 13.7059 13.3333 14.1029 13.3333 14.5882C13.3333 15.0735 12.9333 15.4706 12.4444 15.4706H3.55556C3.06667 15.4706 2.66667 15.0735 2.66667 14.5882V5.76471H0.888889C0.4 5.76471 0 5.36765 0 4.88235C0 4.39706 0.4 4 0.888889 4H3.55556C4.04444 4 4.44444 4.39706 4.44444 4.88235V6.64706H16L12.4444 12.8235H4.44444V13.7059ZM4 16.3529C4.73778 16.3529 5.33333 16.9441 5.33333 17.6765C5.33333 18.4088 4.73778 19 4 19C3.26222 19 2.66667 18.4088 2.66667 17.6765C2.66667 16.9441 3.26222 16.3529 4 16.3529ZM12 16.3529C12.7378 16.3529 13.3333 16.9441 13.3333 17.6765C13.3333 18.4088 12.7378 19 12 19C11.2622 19 10.6667 18.4088 10.6667 17.6765C10.6667 16.9441 11.2622 16.3529 12 16.3529Z" fill="currentColor" />
            <path d="M17.5455 3.07692H15V4.92308H17.5455V8H19.4545V4.92308H22V3.07692H19.4545V0H17.5455V3.07692Z" fill="currentColor" />
        </svg>

    )

}


export default AddCartIcon