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

function CardSkin({ id, foto, nome, preco, categoria, condicao }: SkinInfos) {
    return (
        <Link to={`/skinDetalhes/${id}`} className="linkSkinCard">
            <div className="containerSkinCard">
                <img className="fotoSkinCard" src={foto} />
                <div className="containerInfosSkinCard">
                    <p className="nomeSkinCard">{nome}</p>
                    <p className="precoSkinCard">{preco}</p>
                    <p className="categoriaSkinCard">{categoria}</p>
                    <p className="condicaoSkinCard">{condicao}</p>
                </div>
            </div>
        </Link>
    )
}

export default CardSkin