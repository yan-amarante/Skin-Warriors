import "./styles.css"

import CautionIcon from "../Icons/CautionIcon"


function FilterError() {




    return (

        <section className="error-empty-query">
            <CautionIcon />
            <h2 className="error-text">A categoria requisitada não possui nenhum item cadastrado</h2>
        </section>

    )

}


export default FilterError