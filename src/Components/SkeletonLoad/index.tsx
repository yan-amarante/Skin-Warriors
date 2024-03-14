import "./styles.css"


function SkeletonLoad() {

    const salesCardPerPage: number = 14

    const numberOfSkinCards = Array.from({ length: salesCardPerPage })


    return numberOfSkinCards.map(() => {

        return (

            <li className="skins-list-item">
                <section className="skeleton-load-container skin-card-container">
                    <div className="skeleton-load-image"></div>
                    <div className="skeleton-load-text"></div>
                    <div className="skeleton-load-text"></div>
                    <div className="skeleton-load-text"></div>
                    <div className="skeleton-load-text"></div>
                </section>
            </li>

        )

    })

}


export default SkeletonLoad