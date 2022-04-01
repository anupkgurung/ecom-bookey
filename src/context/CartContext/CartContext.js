import { createContext, useContext, useReducer } from "react";
import { cartInitialState, CartReducer, initialState } from "../../Reducer";

const CartContext = createContext();

const calculateGrossTotal = ({cartList}) => {
    return cartList.reduce((accu, currVal) => {
        return Number(accu) + currVal.productQty ? Number(currVal.productQty) * Number(currVal.price) : Number(currVal.price)
    }, 0)
}

const calculateTotal = ({ cartList }) => {
    return cartList.reduce((accu, currVal) =>{
        return Number(accu) + (Number(currVal.price) - (Number(currVal.discount)*Number(currVal.price)/100))
    }, 0)
}

export const CartProvider = ({ children }) => {
    const [initialState, dispatchCart] = useReducer(CartReducer, cartInitialState);
    const { cartDetail } = initialState;

    cartDetail.grossTotal = calculateGrossTotal(initialState);
    cartDetail.total = calculateTotal(initialState);

    return (
        <CartContext.Provider value={{ initialState, dispatchCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);