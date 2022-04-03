import { useState, useEffect } from "react";
import { useCart, useWishlist } from "../../context";
import { addToUserWishlist , getUserCartList ,removeFromUserCart, updateQtyToUserCart } from "../../api";
import "./wishlist.css";

export const HorizontalProductCard = () => {

    const { initialState: { cartList }, dispatchCart } = useCart();
    const { dispatchWishlist } = useWishlist();
    const [ userCarList, setUserCartList ] = useState([]);
    const encodedToken = localStorage.getItem("token");

    const moveToWishlist = (product,dispatchWishlist,dispatchCart) => {
        removeFromUserCart(product,dispatchCart)
        addToUserWishlist(product,dispatchWishlist);
    }

    useEffect(()=>{
        if(encodedToken){
            getUserCartList(setUserCartList);
        }else{
            setUserCartList(cartList);
        }
    },[encodedToken,cartList])

    return (
        <>
            {
                userCarList.length > 0 ? userCarList.map(({ _id, title, price, discount, image, author, qty}) => (
                    <div className="item" key={_id}>
                        <div className='card-container card-container--horizontal'>
                            <div className="card-header">
                                <div className="flex-row flex-start flex-gap">
                                    <div className="card-img-container cart">
                                        <img className="responsive img-radius" src={image} alt="ikigai" />
                                    </div>
                                    <div className="flex-row flex-direction-col">
                                        <h5>{title}</h5>
                                        <span className="font-sm mt-3">
                                            {author}
                                        </span>
                                        <span>₹{price}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer card-footer--height-horizontal">
                                <button className="btn btn-primary"
                                    onClick={
                                        () => removeFromUserCart({ _id, title, price, discount, image, author },dispatchCart)
                                    }
                                >Remove from Cart</button>
                                <button className="btn btn-secondary-outline"
                                    onClick={
                                        () => moveToWishlist({ _id, title, price, discount, image, author },
                                            dispatchWishlist,dispatchCart)
                                    }
                                >Move to wishlist</button>
                                <div className="footer-icons">
                                    <span className="material-icons"
                                        onClick={
                                            () => updateQtyToUserCart({ _id, title, price, discount, image, author, qty },
                                                dispatchCart,"DECREASE_QTY")
                                        }
                                    >remove_circle_outline</span>
                                </div>
                                <div>
                                    <input className="cart-qty text-center" name="qty" type="text" pattern="[0-9]"  value={qty <= 1 ? 1 :qty} />
                                </div>
                                <div className="footer-icons">
                                    <span className="material-icons"
                                        onClick={
                                            ()=> updateQtyToUserCart({ _id, title, price, discount, image, author, qty },
                                                dispatchCart,"INCREASE_QTY")
                                        }
                                    >add_circle_outline</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                    :
                    <div>No Items in Cart</div>
            }
        </>
    )
}