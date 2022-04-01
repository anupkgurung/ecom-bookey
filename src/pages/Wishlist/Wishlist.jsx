import { ProductCard } from "../../components";
import { useWishlist } from "../../context";
import "./wishlist.css";

export const Wishlist = () => {
  const { wishlistInitialState: { wishlist } } = useWishlist();

  return (
    <div id="main" className="whishlist-container">
      <main className={wishlist.length >0 ? "content-container" : "flex-row-center"}>
        {wishlist.length > 0 ? wishlist.map(({ _id, title, price, discount, image, author }) => (
          <ProductCard
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