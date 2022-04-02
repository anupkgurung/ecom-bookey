import { HorizontalProductCard, CartDetail } from "../../components";

export const Cart = () => {
    return (
        <div id="main" className="cart-container">
            <main className="cart-items flex-row-center flex-gap">
                <HorizontalProductCard />
            </main>
            <CartDetail />
        </div>
    )
}