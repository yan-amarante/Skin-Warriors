import "./Header.css"
import { Link } from 'react-router-dom'
import menu from "../../assets/menu.svg"
import skinWarriorsLogo from "../../assets/skinWarriorsLogo.svg"
import shoppingCart from "../../assets/shoppingCart.svg"

function Header() {

    return (
        <header className="container-header">
                <img src={menu} alt="" />
                <img className="site-logo" src={skinWarriorsLogo} alt="" />
                <img className="cart-icon" src={shoppingCart} alt="" />
        </header>
    )
}

export default Header