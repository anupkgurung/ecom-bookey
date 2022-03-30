import React from "react";
import { Category , VerticleProductCard } from "../../components"
import "./home.css"

export const Home = () => {
    return (
        <div id="main" className="content-body">
            <Category />
            <VerticleProductCard/>
        </div>
    )
}