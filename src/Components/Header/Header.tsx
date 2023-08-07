import "./Header.css"
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import SideBar from "../SideBar/SideBar";


function Header() {

    return (
        <header className="container-header">
            <div className="sidebar-container-header">
                <SideBar />
            </div>
            <div className="logo-container-header">
                <Link to="/">
                    <img className="logo-header" src={"https://imgur.com/EJzKeci.png"} />
                </Link>
            </div>
            <div className="carrinho-container-header">
                <FaShoppingCart className="carrinho-logo-header" />
            </div>
        </header>
    )
}

export default Header