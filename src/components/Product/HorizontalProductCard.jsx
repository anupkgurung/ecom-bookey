import { useCart } from "../../context";

export const HorizontalProductCard = () => {

    const { cartList } = useCart();

    return (
        <div id="main" className="whishlist-container">
            <main className="flex-row-center">
                {
                    cartList && cartList.length > 0 ? cartList.map(({ _id, title, price, discount, image, author }) => (
                        <div class="item" key={_id}>
                            <div class='card-container card-container--horizontal'>
                                <div class="card-header">
                                    <div class="flex-row flex-start flex-gap">
                                        <div class="card-img-container">
                                            <img class="responsive img-radius" src={image} alt="ikigai" />
                                        </div>
                                        <div class="flex-row flex-direction-col">
                                            <h5>{title}</h5>
                                            <span class="font-sm mt-3">
                                                {author}
                                            </span>
                                            <span>₹{price}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer card-footer--height-horizontal">
                                    <button class="btn btn-primary">Remove from Cart</button>
                                    <button class="btn btn-secondary-outline">Move to wishlist</button>
                                    <div class="footer-icons">
                                        <span class="material-icons">remove_circle_outline</span>
                                    </div>
                                    <div>
                                        <input class="cart-qty text-center" name="qty" type="text" pattern="[0-9]" />
                                    </div>
                                    <div class="footer-icons">
                                        <span class="material-icons">add_circle_outline</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))

                        :
                        <div>No Items in Cart</div>
                }
            </main>
        </div>
    )
}