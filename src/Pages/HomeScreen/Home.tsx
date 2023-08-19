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
        const res = await fetch("https://api-skin-warriors.onrender.com/api/v1/skins/buscar-grid-skins");
        const data = await res.json();
        setSkinsGrid(data.skins)
    }

    async function chamarTamanhoTabela() {
        const res = await fetch("https://api-skin-warriors.onrender.com/api/v1/skins/consultar-tamanho-tabela");
        const data = await res.json();
        setOfertasCadastradas(data.tamanho[0].count)
    }

    const gridSkins = skinsGrid.map(skin =>
        <ul className="grid-skins-lista-home" key={skin.id}>
            <li className="grid-skins-infos-home">
                <img className="grid-skins-imagem-home" src={skin.imagem} />
            </li>
        </ul>
    )

    return (
        <main className="container-home">
            <section className="bem-vindo-container-home">
                <article className="bem-vindo-texto-home">
                    <h2 className="bem-vindo-titulo-home">Bem-vindo a nossa loja de skins</h2>
                    <p className="bem-vindo-descricao-home">
                        estamos empenhados em oferecer a melhor experiência de compra possível. Queremos ser sua escolha confiável para encontrar as skins dos seus sonhos e elevar sua experiência
                    </p>
                </article>
                <section className="imagem-container-home">
                    <img className="imagem-home" src="https://imgur.com/FpvtQXS.png" />
                    <div className="retangulo-home"></div>
                </section>
            </section>
            <section className="variedade-container-home">
                <section className="grid-skins-variedade-home">
                    {gridSkins}
                </section>
                <article className="variedade-texto-home">
                    <h2 className="variedade-titulo-home">Variedade Excepcional</h2>
                    <p className="variedade-descricao-home"> Nossa vasta seleção abrange desde skins clássicas até as mais recentes e cobiçadas. Seja qual for o seu estilo, temos algo para você.</p>
                    <p className="variedade-ofertas-cadastradas-home">{ofertasCadastradas}</p>
                </article>
                <section className="grid-skins-variedade-home">
                    {gridSkins}
                </section>
            </section>
        </main>
    )
}

export default Home