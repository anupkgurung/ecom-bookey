import { ProductCard, Filter } from "../../components";
import axios from "axios";
import { useEffect } from "react";
import { useFilter } from "../../context";
import { useLocation } from "react-router-dom";
import { useDocumentTitle } from "../../customHooks";

export const Product = () => {
    useDocumentTitle("Product");
    const { sortedItems, dispatchProductList } = useFilter();
    const {state} =useLocation();
    useEffect(() => {
        (async () => {
            try {
                const { data: { products } } = await axios.get("/api/products");
                dispatchProductList({ type: "SET_PRODUCT", payLoad: products })
                if(state){
                    dispatchProductList({
                        type:"CATEGORY", 
                        payLoad: state.category ,
                        isSetPayLoad : true}) 
                }
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