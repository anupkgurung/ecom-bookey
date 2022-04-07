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


/*
**  Dispatch in else will handle adding and removing of products without authentication 
  and once user goes to cart it will ask for loggin  //TO-DO
  */
const addToUserCart = async (product,dispatchCart,showToast) => {
    
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
        showToast("success", "Product added to Cart");
    } catch ({ response }) {       
        showToast("error", "Error occured on add to Cart");
    }
}

const removeFromUserCart = async (product,dispatchCart,showToast) => {
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
        showToast("success", "Product removed from Cart");
    }catch({response}){
        showToast("error", "Error occured on removing product from Cart");
    }
}

const updateQtyToUserCart = async (product,dispatchCart,action,showToast) => {
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
        showToast("success", `Quantity updated ${product.title}`);
    }catch({response}){
        showToast("error", "Error occured on updating quantity");
    }
}

export {getUserCartList, addToUserCart, removeFromUserCart, updateQtyToUserCart}