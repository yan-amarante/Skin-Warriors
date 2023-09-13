import "./AvaliacaoCard.css"
import { VscStarEmpty, VscStarFull, VscStarHalf } from "react-icons/vsc";


type avalicaoCard = {
    foto: string;
    nome: string;
    texto: string;
    nota: number;
}

function AvaliacaoCard ({ foto, texto, nota }:avalicaoCard) {
    return(
        <section className="container-avaliacao-card">
            <img className="foto-usuario-avaliacao-card" src={foto}/>
            <p className="texto-avaliacao-card">{texto}</p>
            <h4 className="rating_number">{nota}/10</h4>
        </section>
    )
}

export default AvaliacaoCard