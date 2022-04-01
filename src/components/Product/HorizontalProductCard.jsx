import { useCart, useWishlist } from "../../context";
import "./wishlist.css";

export const HorizontalProductCard = () => {

    const { intialState: { cartList }, dispatchCart } = useCart();
    const { dispatchWishlist } = useWishlist();

    return (
        <>
            {
                cartList && cartList.length > 0 ? cartList.map(({ _id, title, price, discount, image, author }) => (
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
                                        () => dispatchCart({
                                            operation: "REMOVE_FROM_CART",
                                            payLoad: { _id, title, price, discount, image, author }
                                        })
                                    }
                                >Remove from Cart</button>
                                <button className="btn btn-secondary-outline"
                                    onClick={
                                        () => {
                                            dispatchWishlist({
                                                operation: "ADD_TO_WISHLIST",
                                                payLoad: { _id, title, price, discount, image, author }
                                            });
                                            dispatchCart({
                                                operation: "REMOVE_FROM_CART",
                                                payLoad: { _id, title, price, discount, image, author }
                                            });
                                        }
                                    }
                                >Move to wishlist</button>
                                <div className="footer-icons">
                                    <span className="material-icons">remove_circle_outline</span>
                                </div>
                                <div>
                                    <input className="cart-qty text-center" name="qty" type="text" pattern="[0-9]" />
                                </div>
                                <div className="footer-icons">
                                    <span className="material-icons">add_circle_outline</span>
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