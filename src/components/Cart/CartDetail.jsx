import { useCart } from "../../context"

export const CartDetail = () => {
    const { intialState : {cartDetail} }  = useCart();
    const {total} = cartDetail ;
    return (
        <aside id="cart-total" className="flex-row-center">
            <div>
                <div className='card-container cart-detail'>
                    <div className="padding-5">
                        <div className="text-center padding-top-4"><h5>Cart Details</h5></div>
                        <hr className="w-100 hr-cart padding-top-2" />
                            <ul className="padding-top-2 flex-row">
                                <li>Total Gross :</li>
                                <li>₹{total}</li>
                            </ul>
                            <ul className="padding-top-2 flex-row">
                                <li>Shipping :</li>
                                <li>₹99</li>
                            </ul>
                            <ul className="padding-top-2 flex-row">
                                <li>Discount :</li>
                                <li>₹0</li>
                            </ul>
                            <ul className="padding-top-2 flex-row">
                                <li>GST :</li>
                                <li>18%</li>
                            </ul>
                            <ul className="padding-top-2 flex-row">
                                <li>Amount payable :</li>
                                <li>1899</li>
                            </ul>
                            <hr className="w-100 hr-cart padding-top-2" />
                            <div className="card-footer card-verticle-footer">
                                <button className="btn btn-primary">Proceed to checkout</button>
                            </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}