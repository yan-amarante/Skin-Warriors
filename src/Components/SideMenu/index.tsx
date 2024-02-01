import "./styles.css"

import Close from "../Icons/Close"

import { useNavigate } from "react-router-dom"

import { useContext } from 'react'

import { navigationContext } from "../../Context/navigationContext"

import { cartContext } from "../../Context/cartContext"

import SkinCard from "../SkinCard"


type SideMenuProps = {

    type: string;

    state: boolean;

    updateState: React.Dispatch<React.SetStateAction<boolean>>;

}

type classNameProp = {

    className: string;

}


function SideMenu({ type, state, updateState }: SideMenuProps) {

    const navigationContextValue = useContext(navigationContext)

    const cartContextValue = useContext(cartContext)

    const navigate = useNavigate()


    if (!navigationContextValue) throw new Error("useNavigationContext deve ser usado dentro de um NavigationProvider")

    if (!cartContextValue) throw new Error("useCartContext deve ser usado dentro de um cartProvider")


    const { currentPage, setCurrentPage } = navigationContextValue

    const { skin } = cartContextValue


    function verifySideMenuState() {

        if (state) return "transition-side_menu"

        else if (!state && type === "menu") return "hide-left-side_menu"

        else if (!state && type === "cart") return "hide-right-side_menu"

    }

    function verifyCurrentPage(page: string) {

        if (currentPage === page) return "enabled-color"

        else return "disabled-color"

    }

    function changePage(page: string) {

        setCurrentPage(page)

        navigate(page)

    }

    function updateMenuState() {

        updateState(false)

    }

    function returnRightDirection() {

        if (type === "menu") return "side-left"

        else if (type === "cart") return "side-right"

    }

    return (

        <section className={`menu-container ${verifySideMenuState()} ${returnRightDirection()}`}>
            <Close onClick={updateMenuState} className="close-menu" />
            {type === "menu" ?
                <ul className="list-nav" role="list">
                    <li onClick={() => changePage("/")} className="list-nav-items">
                        <HomeIcon className={`nav-icon ${verifyCurrentPage("/")}`} />
                        <h2 className={`nav-name ${verifyCurrentPage("/")}`}>Home</h2>
                    </li>
                    <li onClick={() => changePage("/ofertas")} className="list-nav-items">
                        <SaleIcon className={`nav-icon ${verifyCurrentPage("/ofertas")}`} />
                        <h2 className={`nav-name ${verifyCurrentPage("/ofertas")}`}>Ofertas</h2>
                    </li>
                </ul>
                :
                null
            }
            {type === "cart" ?
                <ul className="list-cart" role="list">
                    {
                        skin?.map((item) => {
                            return (
                                <>
                                    <li key={item.id}>
                                        <SkinCard
                                            type="horizontal"
                                            id={item.id}
                                            image={item.image}
                                            name={item.name}
                                            pattern={item.pattern}
                                            price={item.price}
                                            wear={item.wear}
                                            category={item.category}
                                        />
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>
                : null
            }
        </section>

    )

}

function HomeIcon({ className }: classNameProp) {

    return (


        <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" fill="none" />
            <path id="Vector" d="M29.2394 15.8203L29.2409 15.822C29.371 15.9654 29.4567 16.1435 29.4874 16.3349C29.5181 16.5262 29.4925 16.7223 29.4138 16.8993C29.335 17.0763 29.2066 17.2264 29.0442 17.3315C28.8817 17.4366 28.6923 17.4921 28.4989 17.4913H28.4968H25.4971H24.9971V17.9913V28.4989C24.9971 28.7646 24.8917 29.0192 24.7041 29.2069C24.5166 29.3946 24.2623 29.5 23.9973 29.5H19.4978C19.2328 29.5 18.9785 29.3946 18.791 29.2069C18.6034 29.0192 18.498 28.7646 18.498 28.4989V22.4946V21.9946H17.998H11.9986H11.4986V22.4946V28.4989C11.4986 28.7646 11.3932 29.0192 11.2056 29.2069C11.0181 29.3946 10.7638 29.5 10.4988 29.5H5.9993C5.73427 29.5 5.48 29.3946 5.29247 29.2069C5.10491 29.0192 4.99947 28.7646 4.99947 28.4989V17.9913V17.4913H4.49947H1.49981C1.10455 17.4913 0.747235 17.2591 0.587641 16.8987L0.586946 16.8971C0.50802 16.7205 0.482053 16.5248 0.512224 16.3336C0.542395 16.1425 0.627392 15.9643 0.756823 15.8207L0.757219 15.8203L14.2557 0.809422L14.2561 0.809032C14.6258 0.396989 15.3708 0.396989 15.7405 0.809032L15.7409 0.809422L29.2394 15.8203Z" stroke="currentColor" />
        </svg>

    )
}

function SaleIcon({ className }: classNameProp) {

    return (


        <svg className={className} width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9526 0.5H26.6602C26.8769 0.501138 27.088 0.590625 27.2467 0.75498C27.406 0.919947 27.4989 1.14693 27.5 1.38744V12.4777C27.5 12.7767 27.4138 13.1688 27.2582 13.5584C27.1023 13.9485 26.8963 14.2874 26.6944 14.4965L13.418 28.247C13.4179 28.2471 13.4177 28.2473 13.4176 28.2474C13.2584 28.4113 13.0468 28.5 12.8301 28.5C12.6133 28.5 12.4018 28.4113 12.2425 28.2474C12.2424 28.2473 12.2423 28.2471 12.2421 28.247L0.751408 16.3459C0.751266 16.3458 0.751125 16.3456 0.750983 16.3455C0.592108 16.1799 0.5 15.9524 0.5 15.7117C0.5 15.4711 0.592092 15.2435 0.750942 15.078C0.751097 15.0778 0.751253 15.0777 0.751408 15.0775L14.0277 1.32703C14.2281 1.11955 14.553 0.907816 14.9264 0.74766C15.3003 0.587286 15.673 0.5 15.9526 0.5ZM18.7463 11.3392C19.1331 11.5053 19.5484 11.5911 19.9682 11.5913C20.8169 11.5916 21.6272 11.2425 22.2219 10.6269C22.8161 10.0119 23.1471 9.18131 23.1474 8.31861C23.1477 7.45591 22.8172 6.62506 22.2234 6.00967C21.6291 5.39369 20.819 5.04408 19.9704 5.04379C19.5505 5.04364 19.1352 5.12917 18.7483 5.295C18.3614 5.46082 18.011 5.70344 17.7166 6.00813C17.4223 6.31277 17.1897 6.67354 17.0312 7.06939C16.8727 7.46522 16.7913 7.88892 16.7912 8.31644C16.791 8.74397 16.8722 9.16772 17.0304 9.56366C17.1886 9.95961 17.421 10.3205 17.7151 10.6254C18.0093 10.9303 18.3595 11.1731 18.7463 11.3392Z" stroke="CurrentColor" />
        </svg>

    )
}

function AddSaleIcon({ className }: classNameProp) {

    return (

        <svg className={className} width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9526 12.5H26.6602C26.8769 12.5011 27.088 12.5906 27.2467 12.755C27.406 12.9199 27.4989 13.1469 27.5 13.3874V24.4777C27.5 24.7767 27.4138 25.1688 27.2582 25.5584C27.1023 25.9485 26.8963 26.2874 26.6944 26.4965L13.418 40.247C13.4179 40.2471 13.4177 40.2473 13.4176 40.2474C13.2584 40.4113 13.0468 40.5 12.8301 40.5C12.6133 40.5 12.4018 40.4113 12.2425 40.2474C12.2424 40.2473 12.2423 40.2471 12.2421 40.247L0.751408 28.3459C0.751283 28.3458 0.751158 28.3456 0.751034 28.3455C0.592127 28.18 0.5 27.9524 0.5 27.7117C0.5 27.471 0.592128 27.2435 0.751034 27.0779C0.751158 27.0778 0.751283 27.0776 0.751408 27.0775L14.0277 13.327C14.2281 13.1196 14.553 12.9078 14.9264 12.7477C15.3003 12.5873 15.673 12.5 15.9526 12.5ZM18.7463 23.3392C19.1331 23.5053 19.5484 23.5911 19.9682 23.5913C20.8169 23.5916 21.6272 23.2425 22.2219 22.6269C22.8161 22.0119 23.1471 21.1813 23.1474 20.3186C23.1477 19.4559 22.8172 18.6251 22.2234 18.0097C21.6291 17.3937 20.819 17.0441 19.9703 17.0438C19.5505 17.0436 19.1352 17.1292 18.7483 17.295C18.3614 17.4608 18.011 17.7034 17.7166 18.0081C17.4223 18.3128 17.1897 18.6735 17.0312 19.0694C16.8727 19.4652 16.7913 19.8889 16.7912 20.3164C16.791 20.744 16.8722 21.1677 17.0304 21.5637C17.1886 21.9596 17.421 22.3205 17.7151 22.6254C18.0093 22.9303 18.3595 23.1731 18.7463 23.3392Z" stroke="currentColor" />
            <path d="M31.7273 5.38462H27V8.61539H31.7273V14H35.2727V8.61539H40V5.38462H35.2727V0H31.7273V5.38462Z" stroke="currentColor" />
        </svg>

    )
}


export default SideMenu
