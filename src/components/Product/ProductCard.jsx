import axios from "axios";
import { useEffect } from "react";
import { useFilter } from "../../context";

export const ProductCard = () => {
    
    const {sortedItems ,dispatchProductList} = useFilter();
    useEffect(() => {
        (async () => {
            try {
                const {data : { products }} = await axios.get("/api/products");
                dispatchProductList({type : "SET_PRODUCT", payLoad: products})
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])
    return (
        <div id="main" className="content">
            <main className="content-container">
                {sortedItems && sortedItems.map(({ _id,title, price, discount, image }) => (
                   <div className="item" key={_id}>
                   <div className='card-container card-container--verticle product-card-container'>
                       <span className="badge text-badge z-1 m-0">{discount}%</span>                         
                       <div className="card-header">                                
                           <div className="card-img-container position-rel">
                               <img className="responsive img-radius position-abs" src={image} alt="Art of Photography" />
                           </div>
                           <div className="card-desc m-2 card-desc--overlay">
                               <span className="price">₹{price}</span> | 
                              <span className="title">{title}</span>
                               {/* <span className="author">Héctor García </span>  */}
                           </div>
                       </div>
                       <div className="card-footer card-verticle-footer product-card-footer">
                           <button className="btn btn-primary w-100">Add to Cart</button>
                           <button className="btn btn-secondary-outline w-100 ">Add to Wishlist</button>
                       </div>
                   </div>
               </div>
                ))}
            </main>
        </div>
    )
}