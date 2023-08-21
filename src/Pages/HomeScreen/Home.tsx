import "./Home.css"
import { useEffect, useState } from "react"
import BulletCard from "../../Components/BulletSectionCard/BulletCard"


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
                    <h1 className="bem-vindo-titulo-home">Bem-vindo a nossa</h1>
                    <p className="bem-vindo-descricao-home">
                        estamos empenhados em oferecer a melhor experiência de compra possível. Queremos ser sua escolha confiável para encontrar as skins dos seus sonhos e elevar sua experiência
                    </p>
                </article>
                <section className="imagem-container-home">
                    <img className="imagem-home" src="https://imgur.com/FpvtQXS.png" />
                    <div className="retangulo-home"></div>
                </section>
                <h2 className="h2-final-home">Por que escolher nossa</h2>
            </section>
            <section className="variedade-container-home">
                <section className="variedade-cards-container-home">
                    <BulletCard imagem="https://imgur.com/kxoPj85.png" titulo="Preços Competitivos"/>
                    <BulletCard imagem="https://imgur.com/Jse3797.png" titulo="Variedade Excepcional"/>
                    <BulletCard imagem="https://imgur.com/mp3ZCH4.png" titulo="Atualizações Constantes"/>
                </section>
                <article className="variedade-texto-home">
                    <h2 className="variedade-titulo-home">Variedade Excepcional</h2>
                    <p className="variedade-descricao-home"> Nossa vasta seleção abrange desde skins clássicas até as mais recentes e cobiçadas. Seja qual for o seu estilo, temos algo para você.</p>
                    <p className="variedade-ofertas-cadastradas-home">{ofertasCadastradas}</p>
                </article>
            </section>
        </main>
    )
}

export default Home