export const cartInitialState = {
    cartList: [],
    cartDetail: {
        grossTotal: 0,
        shipping: "FREE",
        discount: 20,
        gst: 18,
        total: 0
    }
}

export const CartReducer = (state, { operation, payLoad }) => {
    switch (operation) {
        case "ADD_TO_CART":
            return { ...state, cartList: [...state.cartList, payLoad] }

        case "REMOVE_FROM_CART":
            return { ...state, cartList: [...state.cartList.filter(({ _id }) => _id !== payLoad._id)] }
        
        case "INCREASE_QTY":
            return { ...state, cartList :  state.cartList.map(product=>{
                return {...product, qty: payLoad.qty+1}
            })
        }
        case "DECREASE_QTY":
            return { ...state, cartList :  state.cartList.map(product=>{
                    return {...product, qty: payLoad.qty <=1 ? 1 : payLoad.qty-1}
                })
            }
        case "EMPTY_CART":
            return {
                ...state,
                cartList :[]
            }
        default:
            return state;
    }
}