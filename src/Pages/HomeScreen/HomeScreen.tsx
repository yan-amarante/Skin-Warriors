import "./HomeScreen.css"

function HomeScreen() {

    // const listaItens = lista.map(lista =>
    //     <ul key={lista.id}>
    //         <li className="listaHomeScreen">
    //             <CardSkin id={lista.id} foto={lista.foto} nome={lista.nome} preco={lista.preco} categoria={lista.categoria} condicao={lista.condicao} />
    //         </li>
    //     </ul>
    // );

    return (
        <div className="container-homeScreen">
            <h1 className="titulo-homeScreen">Bem-vindo a nossa loja de skins</h1>
            <p className="texto-homeScreen">
                estamos empenhados em oferecer a melhor experiência de compra possível. Queremos ser sua escolha confiável para encontrar as skins dos seus sonhos e elevar sua experiência
            </p>
            <div className="imagem-containe-homeScreen">
            <img className="imagem-homeScreen" src="https://imgur.com/6HFsviD.png" />
            </div>
            <button className="botao-ofertas-homeScreen"><p className="texto-botao-homeScreen">Ofertas</p></button>
        </div>
    )
}

export default HomeScreen