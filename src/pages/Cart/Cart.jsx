import { HorizontalProductCard, CartDetail } from "../../components";

export const Cart = () => {
    return (
        <div id="main" class="cart-container">
            <main class="cart-items flex-row-center flex-gap">
                <HorizontalProductCard />
            </main>
            <CartDetail />
        </div>
    )
}