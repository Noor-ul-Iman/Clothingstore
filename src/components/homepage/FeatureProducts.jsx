import React from 'react';
import top from "../../assets/top.jpg";
import jeans from '../../assets/jeans.jpg';
import shoes from '../../assets/shoes.jpg'
import { Link } from 'react-router-dom';
const FeatureProducts = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={top}
              alt="Top"
              className="w-full h-120 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Stylish Top</h3>
              <Link to='/Tops' className="mt-2 px-5 py-2 bg-black text-white hover:bg-pink-600 ">Explore More</Link>

            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={jeans}
              alt="Jeans"
              className="w-full h-120 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Denim Jeans</h3>
               <Link to='/Jeans' className="mt-2 px-5 py-2 bg-black text-white hover:bg-pink-600 ">Explore More</Link>

            </div>
          </div>

        
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={shoes}
              alt="Shoes"
              className="w-full h-120 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Casual Shoes</h3>
             <Link to='/Shoes' className="mt-2 px-5 py-2 bg-black text-white hover:bg-pink-600 ">Explore More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProducts;
