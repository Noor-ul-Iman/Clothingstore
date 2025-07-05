import React from "react";
import Header from "../components/Header";
import Hero from "../components/homepage/Hero";
import FeatureProducts from "../components/homepage/FeatureProducts";
import Footer from "../components/Footer";
import Offer from "../components/homepage/Offer";
const Home =()=>{
    return (
        <div>
           <Header />
           <Hero />
           <FeatureProducts />
           <Offer />
           <Footer />
           
        </div>
    )
}
export default Home;