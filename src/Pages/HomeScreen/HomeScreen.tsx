import CardSkin from "../../Components/CardSkin/CardSkin"
import "./HomeScreen.css"
import { lista } from "../../SkinsLista/SkinsLista.tsx"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom"

function HomeScreen() {

    const listaItens = lista.map(lista =>
        <ul key={lista.id}>
            <li className="listaHomeScreen">
                <CardSkin id={lista.id} foto={lista.foto} nome={lista.nome} preco={lista.preco} categoria={lista.categoria} condicao={lista.condicao} />
            </li>
        </ul>
    );

    return (
        <div className="container-homeScreen">
            <img src="/awpduality.jpg" className="imagem-homeScreen" />
            <div className="ofertas-titulo-homeScreen">
            <h1 className="tituloOfertasHomeScreen">Ofertas</h1>
            </div>
                <div className="ofertasHomeScreen">
                    <div className="cardSkinHomeScreen">
                        {listaItens}
                    </div>
                    <div className="verMaisHomeScreen">
                        <Link to="/ofertas" className="linkHomeScreen">
                        <MdOutlineKeyboardArrowRight className="iconeVerMaisHomeScreen" />
                        <p className="textoVerMaisHomeScreen">Ver Mais</p>
                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default HomeScreen