import "./styles.css"

import VerticalSkinCard from "../../Components/VerticalSkinCard"

import FilterError from "../../Components/FilterError"

import { Sale } from "../../Pages/OfertasScreen/OfertasScreen"

import SkeletonLoad from "../../Components/SkeletonLoad"



type SalesListProp = {

    salesState: Sale[] | null

}


function SalesList({ salesState }: SalesListProp) {

    function renderSalesList() {

        if (!salesState || salesState.length < 1) return <FilterError />

        return salesState?.map((sale: Sale) => {

            if (typeof sale !== "object") return

            return (

                <li className="skins-list-item" key={sale.id}>
                    <VerticalSkinCard
                        id={sale.id}
                        image={sale.image}
                        name={sale.name}
                        pattern={sale.pattern}
                        price={sale.price}
                        wear={sale.wear}
                        category={sale.category}
                    />
                </li>

            )

        })

    }


    return (

        <ul role="list" className="skins-list-container">
            {salesState ? renderSalesList() : <SkeletonLoad />}
        </ul>

    )

}


export default SalesList