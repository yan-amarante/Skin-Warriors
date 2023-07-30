import { useParams } from "react-router-dom"
import { lista } from "../../SkinsLista/SkinsLista.tsx"
 
function SkinDetalhes (){

    const{ id } = useParams();
    // let skinAtual = {};

    // const listaItem = lista.map(lista => {
    //     if(id == lista.id){
    //     }
    // })

    return(
        <div className="containerSkinDetalhes">
        <img/>
        </div>
    )
}

export default SkinDetalhes