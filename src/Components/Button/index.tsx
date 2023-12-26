import "./styles.css"

import { useNavigate } from "react-router-dom"


type buttonProps = {

    page: string;

}


function Button({ page }:buttonProps) {

    const navigate = useNavigate()


    function changePage(){

        navigate(page)

    }


    return(

        <button onClick={changePage} className="cta-button-home"><p className="cta-button-text">OFERTAS</p></button>

    )

}


export default Button