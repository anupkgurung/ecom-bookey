import axios from "axios";

const getUserCartList = async (setUserCartList) => {
    try{
        const response = await axios.get("/api/user/cart",{
            headers : {
                authorization : localStorage.getItem("token")
            }
        })
        setUserCartList(response.data.cart)
    }catch({response}){
        console.log(response)
    }
}

const addToUserCart = async (product,dispatchCart) => {
    const encodedToken = localStorage.getItem("token");
    try {
        if (encodedToken) {
            await axios.post("/api/user/cart",  {product},
            { headers: { authorization: encodedToken } },
           )
            dispatchCart({
                operation: "ADD_TO_CART",
                payLoad: product
            })
        }
        else {
            dispatchCart({
                operation: "ADD_TO_CART",
                payLoad: product
            })
        }
    } catch ({ response }) {
        console.log(response);
    }
}

const removeFromUserCart = async (product,dispatchCart) => {
    const {_id} = product;
    const encodedToken = localStorage.getItem("token");
    try{
        if(encodedToken){
            axios.delete(`/api/user/cart/${_id}`,{
                headers : {
                    authorization : localStorage.getItem("token")
                }
            })
            dispatchCart({
                operation: "REMOVE_FROM_CART",
                payLoad: product
            })
        }else{
            dispatchCart({
                operation: "REMOVE_FROM_CART",
                payLoad: product
            })
        }
    }catch({response}){
        console.log(response);
    }
}

const updateQtyToUserCart = async (product,dispatchCart,action) => {
    const {_id} = product;
    const encodedToken = localStorage.getItem("token");
    try{
        if(encodedToken){
            dispatchCart({
                operation : action,
                payLoad : product
            })
            await axios.post(`/api/user/cart/${_id}`,
            {action : {type : action === "DECREASE_QTY" ? "decrement" : "increment"}},
            {
                headers : {
                    authorization : localStorage.getItem("token")
                }
            })
           
        }else{
            dispatchCart({
                operation : action,
                payLoad : product
            })
        }
       
    }catch({response}){
        console.log(response);
    }
}

export {getUserCartList, addToUserCart, removeFromUserCart, updateQtyToUserCart}