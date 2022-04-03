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

const addToUserWishlist = async (product, dispatchWishlist) => {
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
    } catch ({ response }) {
        console.log(response);
    }

}

const removeFromUserWishlist = async (product, dispatchWishlist) => {
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
    } catch ({ response }) {
        console.log(response);
    }

}


export { getUserWislistDetails, addToUserWishlist, removeFromUserWishlist }