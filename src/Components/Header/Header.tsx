import "./Header.css"

import { Link } from 'react-router-dom'

import shoppingCart from "../../assets/shoppingCart.svg"

import SideMenu from "../SideMenu"

import Menu from "../Icons/Menu"

import { useState } from "react"


function Header() {

    const [menu, setMenu] = useState(false)


    function toggleMenu() {

        setMenu(true)

    }

    function changeMenuIconOpacity() {

        if (menu) return "menu-disabled"

        else return "menu-icon"
    }


    return (

        <header className="container-header">
            <SideMenu state={menu} updateState={setMenu} />
            <Menu onClick={() => toggleMenu()} className={changeMenuIconOpacity()} />
            <SiteLogo />
            <img className="cart-icon" src={shoppingCart} alt="" />
        </header>

    )

}


function SiteLogo() {
    return (
        <Link className="site-logo" to="/">
            <svg width="33" height="42" viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H4.35849L13.0755 22.0889H20.5472L28.6415 0H33V38.2667L23.6604 42V35.7778L27.3962 32.9778H19.3019V36.7111H14.3208V32.9778H9.96226H6.22642L9.96226 35.7778V42L0 38.2667V0Z" fill="currentColor" />
                <path d="M14.3208 0V20.5333H19.3019V0H14.3208Z" fill="currentColor" />
            </svg>
        </Link>

    )
}

export default Header