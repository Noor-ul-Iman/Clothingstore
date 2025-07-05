import React from "react";
import heroImage from "../../assets/heroimg.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="w-full md:w-2/5 mb-6 md:mb-0">
          <h2 className="text-4xl md:text-6xl md:pr-28 font-bold text-gray-800 mb-7">
            New Summer Collection 2025
          </h2>
          <p className="text-gray-600 mb-6 md:pr-12">
            Introducing the new fashion summer collection, featuring bold and
            bright colors, playful prints, and comfortable yet stylish pieces
            perfect for any occasion. From oversized blazer dresses to
            monochromatic denim pieces, this collection has something for
            everyone.
          </p>
          <Link to="/Tops" className="bg-gray-900 text-white px-6 py-3 uppercase text-sm hover:bg-pink-600">Shop Now</Link>
        </div>

        
        <div className="w-full md:w-3/5">
          <img
            src={heroImage}
            alt="Summer Collection"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
