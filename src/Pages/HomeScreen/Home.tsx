import "./Home.css"
import { useEffect, useState } from "react"
import BulletCard from "../../Components/BulletSectionCard/BulletCard"
import InfosCheck from "../../Components/InfosCheck/InfosCheck"
import AvaliacaoCard from "../../Components/AvaliacaoCard/AvaliacaoCard"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import heroImage from "../../assets/hero-image.jpg"

function Home() {

    const imgSkinTopHeroSection: string = "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLP7LWnn9u5MRjjeyP89SkjAS2-0Q4MDjwLIeTcQNtaVGG_VXskrq9g8S6uMzPnSNl7ygjtmGdwUJqmcyS6w/360fx360f"
    const imgSkinBottomHeroSection: string = "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eO7nYyCg_bmKoTdn2xZ_Pp9i_vG8MKh2QK1_kRtNzyhJY-dcgU7NF7Z-QLvxuq70Je7vsydy3Ay7iEq7X_UgVXp1uxQF-Nd/360fx360f"

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
            <section className="first_section-container-home">
                <div className="square-background-first_section-home"></div>
                <section className="hero_section-container-first_section-home">
                    <div className="circle_top-skin_info-first_section-home"></div>
                    <div className="line_top-skin_info-first_section-home"></div>
                    <div className="balloon_top-skin_info-first_section-home">
                        <img className="skin_img_top-skin_info-home" src={imgSkinTopHeroSection} />
                        <p className="skin_name_top-skin_info-home">The Empress</p>
                    </div>
                    <div className="circle_bottom-skin_info-first_section-home"></div>
                    <div className="line_bottom-skin_info-first_section-home"></div>
                    <div className="balloon_bottom-skin_info-first_section-home">
                        <img className="skin_img_bottom-skin_info-home" src={imgSkinBottomHeroSection} />
                        <p className="skin_name_bottom-skin_info-home">Sport Gloves</p>
                    </div>
                    <img className="hero_image-first_section-home" src={heroImage} />
                </section>
                <article className="article-first_section-home">
                    <h1 className="title-first_section-home">Preços baixos, segurança e variedade tudo em um só lugar</h1>
                    <p className="description-first_section-home">
                        Nosso objetivo é criar um ambiente seguro e intuitivo, para que você possa passar mais tempo aproveitando suas skins
                    </p>
                    <button className="cta-button-home">
                        <label className="cta-label-home">Ofertas</label>
                    </button>
                </article>
                <h2 className="hook_title-first_section-home">Por que escolher nossa</h2>
            </section>


            <section className="variedade-container-home">
                <section className="variedade-cards-container-home">
                    <BulletCard imagem="https://imgur.com/kxoPj85.png" titulo="Preços Competitivos" />
                    <BulletCard imagem="https://imgur.com/Jse3797.png" titulo="Variedade Excepcional" />
                    <BulletCard imagem="https://imgur.com/mp3ZCH4.png" titulo="Atualizações Constantes" />
                </section>
                <section className="variedade-tela-container">
                    <article className="variedade-texto-home">
                        <h2 className="variedade-titulo-home">Variedade Excepcional</h2>
                        <p className="variedade-descricao-home"> Seja qual for o seu estilo, temos algo para você</p>
                        <section className="infos-check-container-home">
                            <InfosCheck titulo="Todos os estilos de skins" />
                            <InfosCheck titulo="Facas, Luvas, Agentes" />
                        </section>
                    </article>
                    <section className="grid-skins-container-home">
                        {gridSkins}
                    </section>
                    <p className="variedade-ofertas-cadastradas-home">{ofertasCadastradas} Skins cadastradas</p>
                </section>
            </section>


            <section className="avaliacoes-container-home">
                <MdKeyboardArrowLeft className="icone-seta-home" />
                <AvaliacaoCard
                    foto="https://imgur.com/QZhf5LT.png"
                    nome="Ava"
                    texto="Adoro como este site torna a experiência de compra de skins tão fácil e segura. Já comprei skins em outros lugares antes e sempre fiquei nervosa com a segurança dos meus dados. Aqui, tudo é feito de forma profissional e tranquila. Minhas skins chegaram rapidamente e sem problemas"
                />
                <MdKeyboardArrowRight className="icone-seta-home" />
            </section>


            <section className="final-continer-home">
                <article className="texto-descricao-final-home">
                    <h2 className="titulo-final-home">Personalize, Domine, Impressione!</h2>
                    <p className="descricao-final-home">Eleve seu jogo a um novo patamar com nossas skins impressionantes. Personalize suas armas, destaque-se no campo de batalha e mostre sua personalidade única para os jogadores de todo o mundo. Explore agora e mergulhe no emocionante mundo das skins de CS:GO!</p>
                </article>
                <button className="botao-final-home">
                    <label className="label-botao-final-home">Ofertas</label>
                </button>
            </section>
        </main>
    )
}

export default Home