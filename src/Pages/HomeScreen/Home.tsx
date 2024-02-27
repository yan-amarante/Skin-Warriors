import "./Home.css"

import Button from "../../Components/Button/"

import { useNavigate } from "react-router-dom"


const styles = {

    container: "container-home",

    button: "home-cta-button"

}


function Home() {

    const ofertasPageURL: string = "/ofertas"

    const buttonTitle: string = "OFERTAS"


    const navigate = useNavigate()


    function changePage() {

        navigate(ofertasPageURL)

    }

    return (

        <main className={styles.container}>
            <Button className={styles.button} title={buttonTitle} onClick={changePage} />
        </main>

    )

}


export default Home