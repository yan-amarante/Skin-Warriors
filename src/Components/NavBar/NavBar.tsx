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
        <nav>
            <div className="sideMenuHeader">
                {sideMenu == false ? (
                    <button style={sideMenuFalse} onClick={clickSideMenuAtivar}>
                        <HiMenu className="sideMenuNavBar"/>
                    </button>
                ) : (
                    <button style={sideMenuTrue} onClick={clickSideMenuDesativar}>
                        <MdClose />
                        <div className="containerNavBar">
                            <Link to="/skin/faca" className="linkNavBar">Facas</Link>
                            <Link to="/skin/luva" className="linkNavBar">Luvas</Link>
                            <Link to="/skin/rifle" className="linkNavBar">Rifles</Link>
                            <Link to="/skin/sniperRifle" className="linkNavBar">Sniper Rifles</Link>
                            <Link to="/skin/pistola" className="linkNavBar">Pistolas</Link>
                            <Link to="/skin/smg" className="linkNavBar">SMGs</Link>
                        </div>
                    </button>
                )
                }
            </div>
        </nav>
    )
}

export default NavBar