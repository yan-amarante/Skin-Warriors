import "./Header.css"
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import NavBar from "../NavBar/NavBar";


function Header() {

    return (
        <header className="container-header">
            <div className="sidebar-container-header">
                <NavBar/>
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