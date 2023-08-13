import "./Home.css"
import { useEffect, useState } from "react"


function Home() {

    const [skinsGrid, setSkinsGrid] = useState<any[]>([])
    const [ofertasCadastradas, setOfertasCadastradas] = useState<any[]>([])

    useEffect(() => {
        chamarGridSkins();
        chamarTamanhoTabela();
    }, [])

    async function chamarGridSkins() {
        const res = await fetch("http://localhost:3000/api/v1/skins/buscar-grid-skins");
        const data = await res.json();
        setSkinsGrid(data.skins)
    }

    async function chamarTamanhoTabela() {
        const res = await fetch("http://localhost:3000/api/v1/skins/consultar-tamanho-tabela");
        const data = await res.json();
        setOfertasCadastradas(data.tamanho[0].count)
    }

    const GridSkins = skinsGrid.map(skin =>
        <ul className="lista-skins-home" key={skin.id}>
            <li className="lista-infos-home">
                <img className="imagem-skin-home" src={skin.imagem} />
                <p className="nome-skin-lista-home">{skin.nome}</p>
            </li>
        </ul>
    )

    return (
        <main className="container-home">
            <article className="titulo-descricao-container">
                <h1 className="titulo-home">Bem-vindo a nossa</h1>
                <p className="descricao-home">
                    estamos empenhados em oferecer a melhor experiência de compra possível. Queremos ser sua escolha confiável para encontrar as skins dos seus sonhos e elevar sua experiência
                </p>
            </article>
            <section className="lista-ofertas-home">
                <section className="lista-container-home">
                    {GridSkins}
                </section>
                <img className="logo-lista-home" src="https://imgur.com/VR75vso.png"/>
                <p className="ofertas-cadastradas-home">{ofertasCadastradas}</p>
            </section>
            <section className="botao-container-home">
                <button className="botao-ofertas-home"><label className="botao-texto-home">Ofertas</label></button>
            </section>
        </main>
    )
}

export default Home