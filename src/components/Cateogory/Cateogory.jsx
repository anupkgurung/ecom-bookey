import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Cateogory = () => {
    const [error, setError] = useState();
    const [cateogory, setCateogory] = useState();

    useEffect(()=>{
        (async ()=>{
            try{
                await axios.get("api/categories")
                .then(({ data : {categories} })=>{
                    setCateogory(categories);
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
                    {cateogory && cateogory.map(({ _id, categoryName }) => (
                        <li className="m-1 list-style" key={_id}>
                            <Link className="link-style-none" to="/">{categoryName}</Link>
                        </li>
                    ))}
                    {/* href="./page/productlist.html */}
                </ul>
            </aside>
        </div>
    )
}