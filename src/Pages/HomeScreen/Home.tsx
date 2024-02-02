import "./Home.css"

import Button from "../../Components/Button/"

import { useNavigate } from "react-router-dom"


function Home() {

    const navigate = useNavigate()


    function changePage(){

    navigate("/ofertas")

    }

    return (

        <main className="container-home">
            <Button className="home-cta-button" title="OFERTAS" onClick={changePage}/>
        </main>

    )

}


export default Home