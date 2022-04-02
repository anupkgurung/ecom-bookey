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
                return {...product, productQty: payLoad.productQty+1}
            })
        }
        case "DECREASE_QTY":
            return { ...state, cartList :  state.cartList.map(product=>{
                    return {...product, productQty: payLoad.productQty <=1 ? 1 : payLoad.productQty-1}
                })
            }

        default:
            return state;
    }
}