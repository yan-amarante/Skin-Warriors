import "./Header.css"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";


function Header() {
    return (
        <header className="containerHeader">
            <div className="logoTituloHeader">
            <img className="logoHeader" src={"../../public/skinwarriorslogo.png"} />
            </div>
            <div className="barraPesquisa">
                <input className="inputPesquisar" type="text">
                </input>
                <button className="botaoPesquisar">
                <FaMagnifyingGlass className="lupaLogo"/>
                </button>
            </div>
            <div className="barraCarrinho">
            <FaShoppingCart className="carrinhoCompras"/>
            <p className="quantidadeCarrinho">0</p>
            </div>
        </header>
    )
}

export default Header