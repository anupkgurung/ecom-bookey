import axios from "axios";
import { useEffect, useState } from "react";
import { PriceConstants } from "../../contants/Constants";
import { useFilter } from "../../context";

export const Filter = () => {
    const [categoryList , setCategoryList] = useState([]);
    const {  finalProductList : {category,sortBy,filterByPrice} , dispatchProductList } = useFilter();

    useEffect(()=>{
        (async ()=>{
            const { data : {categories}} = await axios.get("/api/categories");
            setCategoryList(categories);            
        })()
    },[])

    return (
        <div id="filter" className="filter-container">
            <aside className="padding-left">
                <h5 className="text-color">Refine your Search</h5>
                <div className="flex-row padding-top-2">
                    <span>Filters</span>
                    <span className="clear-btn" onClick={(e)=>dispatchProductList({
                        type:"CLEAR_ALL"
                    })}>Clear All</span>
                </div>
                <div className="padding-top-4">                        
                        <h6>Category</h6>             
                        <ul className="category padding-top-2">
                            {categoryList && categoryList.map(({_id, categoryName})=>(
                                <li className="m-1 list-style" key={_id}>
                                    <input type="checkbox" id={_id}
                                    checked={category.length>0 && category.includes(categoryName)}
                                    onChange={(e)=>
                                        dispatchProductList({
                                            type:"CATEGORY", 
                                            payLoad: categoryName ,
                                            isSetPayLoad : e.target.checked
                                                })} />
                                    <label htmlFor={_id}>{categoryName}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="padding-top-4">
                        <h6>By Price</h6>
                        <ul className="price padding-top-2 ">
                            <li><input type="radio" className="high" name="price" id="high"
                            checked={sortBy!==null}
                             onChange={(e)=>
                                dispatchProductList({
                                    type:"HIGH_TO_LOW", 
                                    payLoad: e.target.checked ? "HIGH" : null})}/>
                             High to Low</li>
                            <li><input type="radio" className="low" name="price" id="low"
                             onChange={(e)=>
                                dispatchProductList({
                                    type:"LOW_TO_HIGH", 
                                    payLoad: e.target.checked ? "LOW" : null})}/>
                             Low to High</li>
                        </ul>
                    </div>
                    <div className="padding-top-4">                        
                        <h6>By Price Range</h6>             
                        <ul className="price padding-top-2">                                                          
                            {Object.keys(PriceConstants).map(key=>(
                                <li className="m-1 list-style" key={key} >
                                    <input type="checkbox" id={key}
                                        checked={filterByPrice.length>0 && filterByPrice.includes(key)}
                                        onChange={(e)=>
                                            dispatchProductList({
                                                type: "FILTER_BY_PRICE",
                                                payLoad : key,
                                                isSetPayLoad : e.target.checked
                                            })}
                                     /><label htmlFor={key}>{PriceConstants[key]}</label>
                                </li>                                        
                            ))}
                        </ul>
                    </div>
                    <div className="padding-top-4">
                        <h6>Ratings</h6>
                        <ul className="rating padding-top-2">
                            {[...Array(5)].map((value,idx) =>(
                                <>
                                    <input type="radio" name="rating" value={++idx} id={idx} />
                                    <label htmlFor={idx}>☆</label>
                                </>
                            ))}
                        </ul>
                    </div>
                    <div>
                    </div>
            </aside>
        </div>
    )
}