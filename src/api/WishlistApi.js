import axios from "axios";

const getUserWislistDetails = async (setUserWishlist) => {
    try {
        const response = await axios.get("/api/user/wishlist", {
            headers: {
                authorization: localStorage.getItem("token"),
            }
        })
        setUserWishlist(response.data.wishlist);
    } catch ({ response }) {
        console.log(response);
    }
}

/*
**  Dispatch in else will handle adding and removing of products without authentication 
  and once user goes to cart it will ask for loggin  //TO-DO
  */
const addToUserWishlist = async (product, dispatchWishlist,showToast) => {
    const encodedToken = localStorage.getItem("token");
    try {
        if (encodedToken) {
            await axios.post("/api/user/wishlist", { product },
                { headers: { authorization: encodedToken } },
            );
            dispatchWishlist({
                operation: "ADD_TO_WISHLIST",
                payLoad: product
            })
        }
        else {
            dispatchWishlist({
                operation: "ADD_TO_WISHLIST",
                payLoad: product
            })
        }
        showToast("success", "Product added to Wishlist");
    } catch ({ response }) {
        showToast("error", "Error occured on adding product to wishlist");
    }

}

const removeFromUserWishlist = async (product, dispatchWishlist,showToast) => {
    const encodedToken = localStorage.getItem("token");
    const { _id } = product;
    try {
        if (encodedToken) {
            await axios.delete(`/api/user/wishlist/${_id}`, {
                headers: {
                    authorization: encodedToken,
                }
            });
            dispatchWishlist({
                operation: "REMOVE_FROM_WISHLIST",
                payLoad: product
            })
        } else {
            dispatchWishlist({
                operation: "REMOVE_FROM_WISHLIST",
                payLoad: product
            })
        }
        showToast("success", "Product removed from Wishlist");
    } catch ({ response }) {
        showToast("error", "Error occured on removing product from wishlist");
    }

}


export { getUserWislistDetails, addToUserWishlist, removeFromUserWishlist }