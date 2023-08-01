import "./Header.css"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom'
import { useState } from "react"
import NavBar from "../NavBar/NavBar";

function Header() {

    const navigate = useNavigate();

    const [pesquisa, setPesquisa] = useState("");

    const [erro, setErro] = useState(false)

    const [pesquisaClick, setPesquisaClick] = useState(false);

    function verificarPesquisa() {

        if (pesquisa == "luva" || "faca" || "rifle" || "sniperRifle" || "pistola" || "smg") {
            navigate(`/skin/${pesquisa}`);
            setErro(false);
        } else setErro(true)
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
        <header className="containerHeader">
            <div className="sideBarELogoContainer">
                <NavBar />
                <div className="logoContainerHeader">
                    <Link to="/">
                        <img className="logoHeader" src={"../../public/logo.png"} />
                    </Link>
                </div>
            </div>
            <div className="pesquisaECarrinhoContainerHeader">
                <div className="barraPesquisaContainerHeader">
                    {pesquisaClick ? (
                        <input className="inputPesquisaHeader" type="text" onChange={evento => setPesquisa(evento.target.value)} onKeyPress={enterPesquisa}>
                        </input>
                    ) : null}
                    <button onClick={ativarPesquisa} className="botaoPesquisaHeader">
                        <FaMagnifyingGlass className="lupaPesquisaHeader" />
                    </button>
                    {erro ? <p className="quantidadeCarrinhoHeader">Erro de pesquisa</p> : null}
                </div>
                <div className="barraCarrinhoContainerHeader">
                    <FaShoppingCart className="carrinhoComprasHeader" />
                    <p className="quantidadeCarrinhoHeader">0</p>
                </div>
            </div>
        </header>
    )
}

export default Header