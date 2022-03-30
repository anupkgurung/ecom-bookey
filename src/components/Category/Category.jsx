import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Category = () => {
    const [error, setError] = useState();
    const [category, setCategory] = useState();

    useEffect(()=>{
        (async ()=>{
            try{
                await axios.get("api/categories")
                .then(({ data : {categories} })=>{
                    setCategory(categories);
                })
            }catch(error){
                setError(error);
            }
        })();
    },[])

    return (
        <div id="aside" className="aside-container">
            <aside className="padding-top-right">
                <h5 className="text-color">Browse by Category</h5>
                <ul className="cateogory">
                    {category && category.map(({ _id, categoryName }) => (
                        <li className="m-1 list-style" key={_id}>
                            <Link className="link-style-none" to="/products">{categoryName}</Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    )
}