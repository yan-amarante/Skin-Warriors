import "./Header.css"
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import SideBar from "../SideBar/SideBar";


function Header() {

    return (
        <header className="container-header">
            <div className="sidebar-logo-container-header">
                <SideBar />
                <div className="logo-container-header">
                    <Link to="/">
                        <img className="logo-header" src={"../../public/logo.png"} />
                    </Link>
                </div>
            </div>
            <div className="carrinho-container-header">
                <FaShoppingCart className="carrinho-logo-header" />
                <p className="quantidade-carrinho-header">0</p>
            </div>
        </header>
    )
}

export default Header