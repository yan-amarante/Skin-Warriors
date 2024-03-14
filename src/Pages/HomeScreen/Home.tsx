import "./Home.css"

import Button from "../../Components/Button/"

import { NavigateFunction, useNavigate } from "react-router-dom"

function Home() {

    const ofertasPageURL: string = "/ofertas"

    const buttonTitle: string = "OFERTAS"

    const navigate: NavigateFunction = useNavigate()


    function changePage(): void {

        navigate(ofertasPageURL)

    }


    return (

        <main className="container-column container-home">
            <Button className="home-cta-button" title={buttonTitle} onClick={changePage} />
        </main>

    )

}


export default Home