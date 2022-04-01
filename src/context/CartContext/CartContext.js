import { createContext, useContext, useReducer } from "react";
import { cartInitialState, CartReducer } from "../../Reducer";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [ intialState , dispatchCart ] = useReducer(CartReducer,cartInitialState);

    return (
        <CartContext.Provider value={{intialState, dispatchCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);