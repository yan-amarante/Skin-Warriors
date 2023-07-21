import "./Header.css"


function Header() {
    return (
        <header className="containerHeader">
            <div className="logoTituloHeader">
                <img className="logoHeader" src={"../../../public/skinWarriorsHtml.png"} />
                <h1 className="tituloHeader">SKIN WARRIORS</h1>
            </div>
            <div className="barraPesquisa">
                <input className="inputPesquisar" type="text">
                </input>
                <button className="botaoPesquisar">
                    <img className="lupaLogo" src="/lupaLogo.png" />
                </button>
            </div>
        </header>
    )
}

export default Header