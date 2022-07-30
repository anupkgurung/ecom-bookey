import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWishlist, useCart, useFilter } from "../../context";
import {  addToUserWishlist, removeFromUserWishlist, addToUserCart } from "../../api";
import { useToast } from "../../customHooks";

export const VerticleProductCard = () => {
    const [productList, setProducts] = useState();
    const { wishlistInitialState: { wishlist }, dispatchWishlist } = useWishlist();
    const { initialState: { cartList }, dispatchCart } = useCart();
    const { sortedItems,dispatchProductList } = useFilter();
    const { showToast } = useToast();
   
    useEffect(() => {
        (async () => {
            try {
                await axios.get("/api/products")
                    .then(({ data }) => {
                        const { products } = data;
                        setProducts(products);
                        dispatchProductList({ type: "SET_PRODUCT", payLoad: products })
                        dispatchProductList({ type: "PRODUCT_LIST", payLoad: products })
                    })

            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return (
        <div id="main" className="content">
            <main className="content-container">
                {sortedItems && sortedItems.map(({ _id, title, price, discount, image, author }) => (
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
                                        onClick={() => addToUserCart({ _id, title, price, discount, image, author, qty:1}
                                             ,dispatchCart, showToast)
                                        }
                                    >Buy</button>
                                }
                                <button className="btn btn-secondary w-100"
                                    onClick={
                                        wishlist.some(item => item._id === _id) ?
                                            () => removeFromUserWishlist({_id, title, price, discount, image, author}
                                                ,dispatchWishlist,showToast)
                                            :
                                            () => addToUserWishlist({_id, title, price, discount, image, author}
                                                ,dispatchWishlist,showToast)
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