import { Link } from "react-router-dom";
import { useWishlist, useCart } from "../../context";
import "./wishlist.css";

export const ProductCard = ({ _id, title, price, discount, image, author }) => {

    const { wishlistInitialState: { wishlist }, dispatchWishlist } = useWishlist();
    const { intialState: { cartList }, dispatchCart } = useCart();
    const hasAddToWisList = wishlist.some(item => item._id === _id);
    const hasAddToCart = cartList.some(item => item._id === _id);

    return (
        <div className="item" key={_id}>
            <div className='card-container card-container--verticle product-card-container'>
                <span className="badge text-badge z-1 m-0">{discount}%</span>
                <div className="card-header">
                    <div className="card-img-container position-rel">
                        <img className="responsive img-radius position-abs" src={image} alt="Art of Photography" />
                    </div>
                    <div className="card-desc m-2 card-desc--overlay">
                        <span className="price">₹{price}</span> |
                        <span className="title">{title}</span>
                    </div>
                </div>
                <div className="card-footer card-verticle-footer product-card-footer">
                    {hasAddToCart ?
                        <Link className="w-100" to="/cart" >
                            <button className="btn btn-primary w-100 ml-0">
                                Go to Cart
                            </button>
                        </Link>
                        :
                        <button className="btn btn-primary w-100"
                            onClick={
                                () => dispatchCart({
                                    operation: "ADD_TO_CART",
                                    payLoad: { _id, title, price, discount, image, author }
                                })
                            }
                        >Add to Cart</button>
                    }

                    <button className="btn btn-secondary w-100"
                        onClick={
                            hasAddToWisList ?
                                () => dispatchWishlist({
                                    operation: "REMOVE_FROM_WISHLIST",
                                    payLoad: {
                                        _id, title, price, discount, image, author,
                                    }
                                })
                                :
                                () => dispatchWishlist({
                                    operation: "ADD_TO_WISHLIST",
                                    payLoad: {
                                        _id, title, price, discount, image, author,
                                    }
                                })
                        }
                    >{hasAddToWisList ? "Remove From Wishlist" : "Add to Wishlist"}</button>
                </div>
            </div>
        </div>
    )
}