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
        height: "100%",/* 100% Full-height */
        width: "50%", /* 0 width - change this with JavaScript */
        position: "fixed",/* Stay in place */
        zIndex: 1, /* Stay on top */
        top: 0, /* Stay at the top */
        left: 0,
        backgroundColor: "#f9f9f9", /* Black*/
        overflowX: "hidden", /* Disable horizontal scroll */
        border: "#none",
    } as React.CSSProperties

    const sideMenuFalse = {
        border: "none",
        background: "none"
    }

    return (
        <div className="side-menu-container">
            {sideMenu == false ? (
                <button className="botao-side-menu" style={sideMenuFalse} onClick={clickSideMenuAtivar}>
                    <HiMenu className="icone-side-menu" />
                </button>
            ) : (
                <button style={sideMenuTrue} onClick={clickSideMenuDesativar}>
                    <MdClose />
                    <div className="containerNavBar">
                        <NavBar />
                    </div>
                </button>
            )
            }
        </div>
    )
}

export default SideBar