import "./CardSkin.css"

interface SkinInfos {
    foto: string;
    nome: string; 
    preco: string; 
    categoria: string;
    condicao: string;
}

function CardSkin({ foto, nome, preco, categoria, condicao }: SkinInfos){
    return(
        <div className="containerSkinCard">
            <img className="fotoSkinCard" src={foto}/>
            <h1 className="nomeSkinCard">{nome}</h1>
            <h2 className="precoSkinCard">{preco}</h2>
            <p className="categoriaSkinCard">{categoria}</p>
            <p className="condicaoSkinCard">{condicao}</p>
        </div>
    )
}

export default CardSkin