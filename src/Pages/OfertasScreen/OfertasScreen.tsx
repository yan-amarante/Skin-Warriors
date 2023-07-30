import CardSkin from "../../Components/CardSkin/CardSkin"
import "./OfertasScreen.css"
import { lista } from "../../SkinsLista/SkinsLista.tsx"

function OfertasScreen(){

    const listaItens = lista.map(lista =>
        <ul key={lista.id}>
            <li className="listaHomeScreen">
                <CardSkin id={lista.id} foto={lista.foto} nome={lista.nome} preco={lista.preco} categoria={lista.categoria} condicao={lista.condicao} />
            </li>
        </ul>
    );

    return(
        <div>
            {listaItens}
        </div>
    )
}

export default OfertasScreen