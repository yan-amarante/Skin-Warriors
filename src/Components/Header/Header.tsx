import "./Header.css"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom'
import { useState } from "react"

function Header() {

    const navigate = useNavigate();

    const [pesquisa, setPesquisa] = useState("");

    const [erro, setErro] = useState(false)

    function verificarPesquisa() {

        if (pesquisa == "luva" || "faca" || "rifle" || "sniperRifle" || "pistola" || "smg") {
            navigate(`/skin/${pesquisa}`);
            setErro(false);
        } else setErro(true)
    }

    function enterPesquisa(evento:any) {
        if (evento.key === 'Enter') {
            verificarPesquisa()
        }
    }

    return (
        <header className="containerHeader">
            <div className="logoTituloHeader">
                <Link to="/">
                    <img className="logoHeader" src={"../../public/skinwarriorslogo.png"} />
                </Link>
            </div>
            <div className="barraPesquisa">
                <input className="inputPesquisar" type="text" onChange={evento => setPesquisa(evento.target.value)} onKeyPress={enterPesquisa}>
                </input>
                <button onClick={verificarPesquisa} className="botaoPesquisar">
                    <FaMagnifyingGlass className="lupaLogo" />
                </button>
                {erro ? <p className="quantidadeCarrinho">Erro de pesquisa</p> : null}
            </div>
            <div className="barraCarrinho">
                <FaShoppingCart className="carrinhoCompras" />
                <p className="quantidadeCarrinho">0</p>
            </div>
        </header>
    )
}

export default Header