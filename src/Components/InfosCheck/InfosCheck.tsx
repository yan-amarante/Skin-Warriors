import "./InfosCheck.css"
import { AiOutlineCheck } from "react-icons/ai";

type infosCheck = {
    titulo: string;
}

function InfosCheck ({ titulo }:infosCheck) {
    return(
        <section className="container-infos-check">
        <AiOutlineCheck className="icone-infos-check"/>
        <p className="titulo-infos-check">{titulo}</p>
        </section>
    )
}

export default InfosCheck