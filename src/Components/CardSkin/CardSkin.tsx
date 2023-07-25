import "./CardSkin.css"
import { Link } from "react-router-dom"

interface SkinInfos {
    id: number;
    foto: string;
    nome: string; 
    preco: string; 
    categoria: string;
    condicao: string;
}

function CardSkin({ id, foto, nome, preco, categoria, condicao }: SkinInfos){
    return(
        <Link to={`/skinDetalhes/${id}`} className="linkSkinCard">
        <div className="containerSkinCard">
            <img className="fotoSkinCard" src={foto}/>
            <h1 className="nomeSkinCard">{nome}</h1>
            <h2 className="precoSkinCard">{preco}</h2>
            <p className="categoriaSkinCard">{categoria}</p>
            <p className="condicaoSkinCard">{condicao}</p>
        </div>
        </Link>
    )
}

export default CardSkin