import React from "react";
import { Category, VerticleProductCard, Footer } from "../../components"
import "./home.css";
import { useDocumentTitle } from "../../customHooks";

export const Home = () => {
    useDocumentTitle("Home");
    return (
        <>
            <div id="main" className="content-body">
                <Category />
                <VerticleProductCard />
            </div>
            <Footer />
        </>
    )
}