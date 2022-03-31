import { ProductCard, Filter } from "../../components";
import axios from "axios";
import { useEffect } from "react";
import { useFilter } from "../../context";

export const Product = () => {

    const { sortedItems, dispatchProductList } = useFilter();
    useEffect(() => {
        (async () => {
            try {
                const { data: { products } } = await axios.get("/api/products");
                dispatchProductList({ type: "SET_PRODUCT", payLoad: products })
            } catch (error) {
                console.log(error);
            }
        })()
    }, [dispatchProductList])
    return (
        <>
            <div id="content" className="content-body-product">
                <Filter key="axa" />
                <div id="main" className="content">
                    <main className="content-container">
                        {sortedItems && sortedItems.map(({ _id, title, price, discount, image, author }) => (
                            <ProductCard
                                key={_id}
                                _id={_id}
                                title={title}
                                price={price}
                                discount={discount}
                                image={image}
                                author={author}

                            />
                        ))}
                    </main>
                </div>
            </div>
        </>
    )
}