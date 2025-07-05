import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ name, price, image, slug, onAddToCart }) => {
  
  return (
    <div className=" rounded-md p-2 shadow hover:shadow-lg flex flex-col items-center">
      <Link to={`/product/${slug}`} className="w-full text-center">
        <img src={image} alt={name} className="w-full h-88 object-cover mb-4 rounded" />
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">PKR {price}</p>
      </Link>
      
      
      <button
        onClick={onAddToCart}
        className="bg-black text-white px-4 py-2 rounded hover:bg-pink-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;
