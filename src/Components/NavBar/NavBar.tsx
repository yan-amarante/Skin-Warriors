import "./NavBar.css"
import { Link } from 'react-router-dom'
import { useState } from "react"
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

function NavBar() {

    const [sideMenu, setSideMenu] = useState(false)

    function clickSideMenuAtivar() {
        setSideMenu(true);
    }
    function clickSideMenuDesativar() {
        setSideMenu(false);
    }

    const sideMenuTrue = {
        height: "100%",
        width: "50%",
        position: "fixed",
        zIndex: 1,
        top: 0,
        left: 0,
        backgroundColor: "#f9f9f9",
        overflowX: "hidden",
        border: "#none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: "160px",
    } as React.CSSProperties

    const sideMenuFalse = {
        border: "none",
        background: "none"
    } as React.CSSProperties

    return (
        <nav className="container-navbar">
            {sideMenu == false ? (
                <button className="botao-abrir-navbar" style={sideMenuFalse} onClick={clickSideMenuAtivar}>
                    <HiMenu className="icone-sidemenu-navbar" />
                </button>
            ) : (
                <section style={sideMenuTrue}>
                    <button className="botao-fechar-navbar" onClick={clickSideMenuDesativar}>
                        <MdClose className="icone-fechar-navbar" />
                    </button>
                    <section className="links-container-navbar">
                        <Link to="/" className="linkNavBar">Home</Link>
                        <Link to="/ofertas" className="linkNavBar">Ofertas</Link>
                    </section>
                </section>
            )
            }
        </nav>
    )
}

export default NavBar