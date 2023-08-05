import { useState } from "react"
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import NavBar from "../NavBar/NavBar";
import "./SideBar.css"

function SideBar() {

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
    }

    return (
        <div className="side-menu-container">
            {sideMenu == false ? (
                <button className="botao-sidemenu" style={sideMenuFalse} onClick={clickSideMenuAtivar}>
                    <HiMenu className="icone-side-menu" />
                </button>
            ) : (
                <div style={sideMenuTrue}>
                <button className="botao-fechar-sidemenu" onClick={clickSideMenuDesativar}>
                    <MdClose className="icone-fechar-sidemenu" />
                </button>
                <div className="navbar-container-sidebar">
                        <h1 className="h1-sidebar">Categorias</h1>
                        <NavBar />
                    </div>
                    <h1 className="h1-sidebar">Sobre Nós</h1>
                </div>
            )
            }
        </div>
    )
}

export default SideBar