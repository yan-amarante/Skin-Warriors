import { useParams } from "react-router-dom"
import { lista } from "../../SkinsLista/SkinsLista.tsx"
import "./SkinDetalhes.css"

function SkinDetalhes() {

    const { id } = useParams();
    let skinAtual: any;

    const listaItem = lista.map(lista => {
        if (id == lista.id) {
            skinAtual = { id: lista.id, foto: lista.foto, nome: lista.nome, preco: lista.preco, categoria: lista.categoria, condicao: lista.condicao }
        }
    })

    return (
        <div className="containerSkinDetalhes">
            <div className="skinInfosSkinDetalhes">
                <img src={skinAtual.foto} />
                <div className="textoContainerSkinDetalhes">
                <h1>{skinAtual.nome}</h1>
                <p>{skinAtual.preco}</p>
                <p>{skinAtual.categoria}</p>
                <p>{skinAtual.condicao}</p>
                </div>
            </div>
        </div>
    )
}

export default SkinDetalhes