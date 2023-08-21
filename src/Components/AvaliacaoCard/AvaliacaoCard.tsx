import "./AvaliacaoCard.css"
import { VscStarEmpty, VscStarFull, VscStarHalf } from "react-icons/vsc";


type avalicaoCard = {
    foto: string;
    nome: string;
    texto: string;
}

function AvaliacaoCard ({ foto, nome, texto }:avalicaoCard) {
    return(
        <section className="container-avaliacao-card">
            <img className="foto-usuario-avaliacao-card" src={foto}/>
            <h2 className="titulo-avaliacao-card">Avaliação de {nome}</h2>
            <p className="texto-avaliacao-card">{texto}</p>
            <section className="estrelas-container-avaliacao-card">
            <VscStarFull className="teste2"/>
            <VscStarFull className="teste2"/>
            <VscStarFull className="teste2"/>
            <VscStarHalf className="teste3"/>
            <VscStarEmpty className="teste"/>
            </section>
        </section>
    )
}

export default AvaliacaoCard