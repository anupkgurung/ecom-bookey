import { Link } from "react-router-dom";
import { useWishlist, useCart } from "../../context";
import {  addToUserWishlist, removeFromUserWishlist, addToUserCart } from "../../api";
import "./wishlist.css";
import { useToast } from "../../customHooks";

export const ProductCard = ({ _id, title, price, discount, image, author }) => {

    const product = { _id, title, price, discount, image, author };
    const { wishlistInitialState: { wishlist }, dispatchWishlist } = useWishlist();
    const { initialState: { cartList }, dispatchCart } = useCart();
    const hasAddToWisList = wishlist.some(item => item._id === _id);
    const hasAddToCart = cartList.some(item => item._id === _id);
    const { showToast } = useToast();

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
                                () => addToUserCart({ _id, title, price, discount, image, author, qty:1} 
                                    ,dispatchCart,showToast)
                            }
                        >Add to Cart</button>
                    }

                    <button className="btn btn-secondary w-100"
                        onClick={
                            hasAddToWisList ?
                            () => removeFromUserWishlist(product,dispatchWishlist,showToast) 
                            :
                            () => addToUserWishlist(product,dispatchWishlist,showToast)
                        }
                    >{hasAddToWisList ? "Remove From Wishlist" : "Add to Wishlist"}</button>
                </div>
            </div>
        </div>
    )
}