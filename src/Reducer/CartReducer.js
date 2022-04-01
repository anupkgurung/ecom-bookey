export const cartInitialState = {
    cartList : [],
    cartDetail :  {grossTotal :0 ,
        shipping : 0,
        gst : 18,
        total : 0
    }
}

export const CartReducer = (state,{operation, payLoad}) => {
    switch(operation){
        case "ADD_TO_CART":
            return {...state , cartList : [...state.cartList, payLoad] }
        case "REMOVE_FROM_CART":
            return {...state, cartList : [...state.cartList.filter(({_id}) => _id !== payLoad._id) ]}
        default :
            return state;
    }
}