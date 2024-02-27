import "./Header.css"

import { useNavigate } from 'react-router-dom'

import ShoppingCartLogo from "../Icons/ShoppingCart"

import SideMenu from "../SideMenu"

import Menu from "../Icons/Menu"

import { useState, useContext } from "react"

import { navigationContext } from "../../Context/navigationContext"

import { cartContext } from "../../Context/cartContext"


function Header() {

    const [menu, setMenu] = useState(false)

    const [cart, setCart] = useState(false)


    const cartContextValue = useContext(cartContext)

    if (!cartContextValue) throw new Error("useCartContext deve ser usado dentro de um cartProvider")

    const { skin } = cartContextValue


    function toggleMenu() {

        setMenu(true)

    }

    function toggleCart() {

        setCart(true)

    }

    function changeMenuIconOpacity() {

        if (menu) return "menu-disabled"

        else return "menu-icon"

    }

    function returnClassIfCartHasLength(){

        if(skin?.length) return "cart-notification"

        else return ""
    }


    return (

        <header className="container-header">
            <SideMenu type="menu" state={menu} updateState={setMenu} />
            <Menu onClick={() => toggleMenu()} className={changeMenuIconOpacity()} />
            <SiteLogo />
            <section className="cart-container">
            <div className={returnClassIfCartHasLength()}></div>
                <ShoppingCartLogo onClick={() => toggleCart()} />
            </section>
            <SideMenu type="cart" state={cart} updateState={setCart} />
        </header>

    )

}


function SiteLogo() {

    const contextValue = useContext(navigationContext);

    const navigate = useNavigate()


    if (!contextValue) {

        throw new Error("useNavigationContext deve ser usado dentro de um NavigationProvider")

    }


    const { setCurrentPage } = contextValue


    function updatePageContext() {

        setCurrentPage("/")

        navigate("/")

    }


    return (

        <svg onClick={() => updatePageContext()} className="site-logo" width="33" height="42" viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H4.35849L13.0755 22.0889H20.5472L28.6415 0H33V38.2667L23.6604 42V35.7778L27.3962 32.9778H19.3019V36.7111H14.3208V32.9778H9.96226H6.22642L9.96226 35.7778V42L0 38.2667V0Z" fill="currentColor" />
            <path d="M14.3208 0V20.5333H19.3019V0H14.3208Z" fill="currentColor" />
        </svg>

    )
}

export default Header