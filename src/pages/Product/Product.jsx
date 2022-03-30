import { ProductCard, Filter } from "../../components"

export const Product = () => {

    return (
        <>
            <div id="content" className="content-body-product">
                <Filter />
                <ProductCard />
            </div>
        </>
    )
}