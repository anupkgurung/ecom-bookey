import React from "react";
import { Cateogory , VerticleProductCard } from "../../components"
import "./home.css"

export const Home = () => {
    return (
        <div id="main" className="content-body">
            <Cateogory />
            <VerticleProductCard/>
        </div>
    )
}