import axios from "axios";
import { useEffect, useState } from "react";


export const VerticleProductCard = () => {
    const [productList, setProducts] = useState();

    useEffect(() => {
        (async () => {
            try {
                await axios.get("/api/products")
                    .then(({ data }) => {
                        const { products } = data;
                        setProducts(products);
                    })

            } catch (error) {
                console.log(error);
            }
        })()
    }, [])
    return (
        <div id="main" className="content">
            <main className="content-container">
                {productList && productList.map(({ _id,title, price, discount, image }) => (
                    <div className="item" key={_id}>
                        <div className='card-container card-container--verticle'>
                            <span className="badge text-badge z-1 m-0">{discount}%</span>
                            <div className="card-header">
                                <div className="card-img-container position-rel">
                                    <img className="responsive img-radius position-abs" src={image} alt="ikigai" />
                                </div>
                                <div className="card-desc m-1 card-desc--overlay">
                                    <span className="price">₹{price}</span> |
                                    <span className="title">{title}</span>
                                </div>
                            </div>
                            <div className="card-footer card-verticle-footer">
                                <div className="footer-btn">Buy</div>
                                <div className='footer-btn'>Wishlist</div>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    )
}