import CardSkin from "../../Components/CardSkin/CardSkin"
import "./HomeScreen.css"
import { lista } from "../../SkinsLista/SkinsLista.tsx"

interface SkinInfos {
    id: number;
    foto: string;
    nome: string;
    preco: string;
    categoria: string;
    condicao: string;
}

function HomeScreen() {

    const listaItens = lista.map(lista =>
        <ul key={lista.id}>
            <li className="listaHomeScreen">
                <CardSkin id={lista.id} foto={lista.foto} nome={lista.nome} preco={lista.preco} categoria={lista.categoria} condicao={lista.condicao} />
            </li>
        </ul>
    );

    return (
        <div className="containerHomeScreen">
            <img src="/awpduality.jpg" className="imagemHomeScreen" />
            <div className="ofertasHomeScreen">
                {listaItens}
            </div>
        </div>
    )
}

export default HomeScreen