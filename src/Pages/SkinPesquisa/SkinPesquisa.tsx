import { useParams } from "react-router-dom"
import { lista } from "../../SkinsLista/SkinsLista.tsx"
import CardSkin from "../../Components/CardSkin/CardSkin.tsx";
import "./SkinPesquisa.css"

function SkinPesquisa() {

    const { id } = useParams();

    const listaItens = lista.map(lista =>
        id == lista.categoria ? 
        (
        <ul key={lista.id}>
            <li className="listaHomeScreen">
                <CardSkin id={lista.id} foto={lista.foto} nome={lista.nome} preco={lista.preco} categoria={lista.categoria} condicao={lista.condicao} />
            </li>
        </ul>
        ) 
        : null
        );


    return (
        <div className="containerSkinPesquisa">{listaItens}</div>
    )
}

export default SkinPesquisa