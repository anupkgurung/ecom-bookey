import { ProductCard } from "../../components";
import { useWishlist } from "../../context";
import {useState,useEffect} from "react";
import { getUserWislistDetails } from "../../api";

export const Wishlist = () => {
  const { wishlistInitialState: { wishlist } } = useWishlist();
  const encodedToken = localStorage.getItem("token");
  const [userWishlist, setUserWishlist]  = useState({});
  
  useEffect(()=>{
    if(encodedToken){
        getUserWislistDetails(setUserWishlist);
    }else{
        setUserWishlist(wishlist)
    }    
  },[wishlist,encodedToken])

  return (
    <div id="main" className="whishlist-container">
      <main className={userWishlist.length >0 ? "content-container" : "flex-row-center"}>
        {userWishlist.length > 0 ? userWishlist.map(({ _id, title, price, discount, image, author }) => (
          <ProductCard
            key={_id}
            _id={_id}
            title={title}
            price={price}
            discount={discount}
            image={image}
            author={author}
          />
        )) 
      : <div>No Items in Wishlist</div>
      }
      </main>
    </div>
  )
}