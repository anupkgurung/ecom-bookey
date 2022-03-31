export const initialState = {
    wishlist: []
}

export const WishlistReducer = (state, { operation, payLoad }) => {
    switch (operation) {
        case "ADD_TO_WISHLIST":
            return {
                ...state, wishlist: [...state.wishlist, payLoad]
            }
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state, wishlist: state.wishlist.filter(item=>item._id !== payLoad._id)
            }
        default :
        return state;
    }
}