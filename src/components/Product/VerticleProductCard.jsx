import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWishlist, useCart } from "../../context";

export const VerticleProductCard = () => {
    const [productList, setProducts] = useState();
    const { wishlistInitialState: { wishlist }, dispatchWishlist } = useWishlist();
    const { intialState: { cartList }, dispatchCart } = useCart();

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
                {productList && productList.map(({ _id, title, price, discount, image, author }) => (
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
                                {cartList.some(item => item._id === _id) ?
                                    <Link className="w-100" to="/cart" >
                                        <button className="btn btn-primary">
                                            Go to Cart
                                        </button>
                                    </Link>
                                    :
                                    <button className="btn btn-primary w-100"
                                        onClick={() => dispatchCart({
                                            operation: "ADD_TO_CART",
                                            payLoad: { _id, title, price, discount, image, author }
                                        })
                                        }
                                    >Buy</button>
                                }
                                <button className="btn btn-secondary w-100"
                                    onClick={
                                        wishlist.some(item => item._id === _id) ?
                                            () => dispatchWishlist({
                                                operation: "REMOVE_FROM_WISHLIST",
                                                payLoad: {
                                                    _id, title, price, discount, image, author,
                                                }
                                            })
                                            :
                                            () => dispatchWishlist({
                                                operation: "ADD_TO_WISHLIST",
                                                payLoad: { _id, title, price, discount, image, author }
                                            })
                                    }
                                >{wishlist.some(item => item._id === _id) ? "Remove" : "Wishlist"}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    )
}