import React from "react";
import offer from '../../assets/offer.jpg'
import { Link } from "react-router-dom";
const Offer = () => {
  return (
    <section
      className=" bg-center py-8 px-0"
      style={{
        margin:70,
        backgroundImage: `url(${offer})`, 
      }}
    >
      <div className="max-w-3xl mx-auto bg-white text-center py-12 px-6 shadow-lg rounded">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get A $20 EasterWear Card
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          When You Buy $100 E-Gift Cards
        </p>
        <p className="text-sm text-gray-500 mb-4">ENDS 25-27</p>
        <Link to="/shop" className="uppercase font-semibold underline hover:text-pink-600 ">Shop Now</Link>
       
      </div>
    </section>
  );
};

export default Offer;
