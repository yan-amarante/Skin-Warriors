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

    function enterPesquisa(evento: any) {
        if (evento.key === 'Enter') {
            verificarPesquisa()
        }
    }

    return (
        <header className="containerHeader">
            <div className="logoContainerHeader">
                <Link to="/">
                    <img className="logoHeader" src={"../../public/logo.png"} />
                </Link>
            </div>
            <div className="barraPesquisaContainerHeader">
                <input className="inputPesquisaHeader" type="text" onChange={evento => setPesquisa(evento.target.value)} onKeyPress={enterPesquisa}>
                </input>
                <button onClick={verificarPesquisa} className="botaoPesquisaHeader">
                    <FaMagnifyingGlass className="lupaPesquisaHeader" />
                </button>
                {erro ? <p className="quantidadeCarrinhoHeader">Erro de pesquisa</p> : null}
            </div>
            <div className="barraCarrinhoContainerHeader">
                <FaShoppingCart className="carrinhoComprasHeader" />
                <p className="quantidadeCarrinhoHeader">0</p>
            </div>
        </header>
    )
}

export default Header