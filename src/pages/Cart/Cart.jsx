import { HorizontalProductCard, CartDetail } from "../../components";
import { useDocumentTitle } from "../../customHooks";

export const Cart = () => {
    useDocumentTitle("Product");
    return (
        <div id="main" className="cart-container">
            <main className="cart-items flex-row-center flex-gap">
                <HorizontalProductCard />
            </main>
            <CartDetail />
        </div>
    )
}