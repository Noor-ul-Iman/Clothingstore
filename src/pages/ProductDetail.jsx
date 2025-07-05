import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../CartContext";
import tops from "../data/tops.json";
import jeans from "../data/jeans.json";
import shoes from "../data/shoes.json"
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductDetail = () => {
  const allProducts = [...tops, ...jeans,...shoes];
  const { slug } = useParams();
  const { addtocart } = useContext(CartContext);
 const product = allProducts.find((item) => item.slug === slug);

  // Local state to manage quantity on this page
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="p-6">Product not found.</div>;

  return (
    <div>
      <Header />
      <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-full h-auto max-h-[500px] object-cover rounded shadow"
          />
        </div>
        <div className="flex flex-col">
          <div>
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.desc}</p>
            <p className="text-xl font-semibold mb-6">PKR {product.price}</p>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center border rounded">
              <button
                className="px-3 py-1 text-lg cursor-pointer"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                −
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="px-3 py-1 text-lg cursor-pointer"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() => addtocart({ ...product, quantity })}
            className="bg-black text-white px-6 py-3 rounded hover:bg-pink-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
