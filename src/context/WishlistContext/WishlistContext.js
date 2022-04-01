import { createContext, useContext, useReducer } from "react";
import { initialState, WishlistReducer } from "../../Reducer"; 

const WishlistContext = createContext();

export const WishlistProvider = ({children}) => {
    const [ wishlistInitialState, dispatchWishlist ] = useReducer(WishlistReducer,initialState);
    return (
        <WishlistContext.Provider value={{ wishlistInitialState, dispatchWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => useContext(WishlistContext);
