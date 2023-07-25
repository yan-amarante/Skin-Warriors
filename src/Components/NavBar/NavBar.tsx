import "./NavBar.css"
import { Link } from 'react-router-dom'

function NavBar() {

    return (
        <nav>
            <div className="containerNavBar">
                <Link to="/skin/faca" className="linkNavBar">Facas</Link>
                <Link to="/skin/luva" className="linkNavBar">Luvas</Link>
                <Link to="/skin/rifle" className="linkNavBar">Rifles</Link>
                <Link to="/skin/sniperRifle" className="linkNavBar">Sniper Rifles</Link>
                <Link to="/skin/pistola" className="linkNavBar">Pistolas</Link>
                <Link to="/skin/smg" className="linkNavBar">SMGs</Link>
            </div>
        </nav>
        )
}

export default NavBar