import "./Header.css"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom'
import { useState } from "react"
import SideBar from "../SideBar/SideBar";


function Header() {

    const navigate = useNavigate();

    const [pesquisa, setPesquisa] = useState("");

    const [pesquisaClick, setPesquisaClick] = useState(false);

    function verificarPesquisa() {

        if (pesquisa == "luva" || "faca" || "rifle" || "sniperRifle" || "pistola" || "smg") {
            navigate(`/skin/${pesquisa}`);
        }
    }

    function enterPesquisa(evento: any) {
        if (evento.key === 'Enter') {
            verificarPesquisa()
        }
    }

    function ativarPesquisa() {

        setPesquisaClick(true);

        if (pesquisaClick == true) {
            setPesquisaClick(false)
        }

    }

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
            <div className="pesquisa-carrinho-container-header">
                <div className="pesquisa-container-header">
                    {pesquisaClick ? (
                        <input className="input-pesquisa-header" type="text" onChange={evento => setPesquisa(evento.target.value)} onKeyPress={enterPesquisa}>
                        </input>
                    ) : null}
                    <button className="botao-pesquisa-header" onClick={ativarPesquisa} >
                        <FaMagnifyingGlass className="lupa-pesquisa-header" />
                    </button>
                </div>
                <div className="carrinho-container-header">
                    <FaShoppingCart className="carrinho-logo-header" />
                    <p className="quantidade-carrinho-header">0</p>
                </div>
            </div>
        </header>
    )
}

export default Header