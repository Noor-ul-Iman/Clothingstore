import React, { useContext } from "react";
import CartContext from "../CartContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeitem, incrementQuantity, decrementQuantity } = useContext(CartContext);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow p-4 md:p-6">
        <h2 className="text-2xl font-semibold mb-6 flex flex-col items-center">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <>
            {/* Make table container horizontally scrollable on small devices */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[600px] md:min-w-full">
                <thead>
                  <tr className="border-b text-left bg-gray-50">
                    <th className="p-2 whitespace-nowrap">Product</th>
                    <th className="p-2 whitespace-nowrap">Price</th>
                    <th className="p-2 whitespace-nowrap">Quantity</th>
                    <th className="p-2 whitespace-nowrap">Total</th>
                    <th className="p-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-2 flex items-center gap-3 whitespace-nowrap">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 md:w-16 md:h-16 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium text-sm md:text-base">{item.name}</p>
                          <p className="text-xs md:text-sm text-gray-500">Color: Black, Size: Small</p>
                          <p className="text-xs md:text-sm text-gray-400">SN: CTH-5487</p>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">${item.price.toFixed(2)}</td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center gap-1 md:gap-2">
                          <button
                            className="border rounded px-2 py-1 md:px-3 md:py-1 cursor-pointer select-none"
                            onClick={() => decrementQuantity(item.id)}
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            −
                          </button>
                          <span className="text-center w-6 md:w-8">{item.quantity}</span>
                          <button
                            className="border rounded px-2 py-1 md:px-3 md:py-1 cursor-pointer select-none"
                            onClick={() => incrementQuantity(item.id)}
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</td>
                      <td className="p-2 whitespace-nowrap">
                        <button
                          onClick={() => removeitem(item.id)}
                          className="text-red-500 text-xl cursor-pointer hover:text-red-700"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          ×
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Total & Checkout */}
            <div className="mt-6 p-4 border-t flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
              <h2 className="text-xl font-semibold text-center md:text-left">
                Total Amount: <span className="text-pink-600">${totalAmount.toFixed(2)}</span>
              </h2>
              <Link
                to="/Checkout"
                className="bg-black text-white px-6 py-3 rounded hover:bg-pink-600 transition text-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
