import "./BulletCard.css"

type infoBulletCard = {
    imagem: string;
    titulo: string;
}

function BulletCard({ imagem, titulo }: infoBulletCard) {
    return (
        <section className="card-container-bullet">
            <section className="cards-images-container-bullet">
            <div className="circulo-icone-card-bullet"></div>
                <img className="imagem-card-bullet" src={imagem} />
            </section>
            <section className="titulo-container-bullet">
                <p className="card-info-bullet">{titulo}</p>
            </section>
        </section>
    )
}

export default BulletCard