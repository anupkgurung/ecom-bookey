import React from "react";
import { Cateogory } from "../../components/Cateogory/Cateogory";
import { VerticleProductCard } from "../../components/Product/VerticleProductCard";
import "./home.css"

export const Home = () => {
    return (
        <div id="main" className="content-body">
            <Cateogory />
            <VerticleProductCard/>
        </div>
    )
}