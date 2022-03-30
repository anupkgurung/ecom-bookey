import { ProductCard, Filter} from "../../components"
import { useFilter } from "../../context";

export const Product = () => {

     return (
        <>
            <div id="content" className="content-body-product">
                <Filter />
                <ProductCard />
            </div>
            
        </>
            
        
     )
}