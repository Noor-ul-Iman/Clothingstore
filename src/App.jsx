import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Tops from "./pages/Tops"
import ProductDetail from "./pages/ProductDetail"
import CartContext from "./CartContext"
import Cart from "./pages/Cart"
import Jeans from "./pages/Jeans"
import Shoes from "./pages/Shoes"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ContactPage from "./pages/ContactPage"
import CheckoutPage from "./pages/CheckoutPage"
const App = () => {
  const [cartItems, setitems] = useState([]);
 
const addtocart = (item) => {
  setitems((prev) => {
    const existing = prev.find((i) => i.id === item.id);
    if (existing) {
      return prev.map((i) =>
        i.id === item.id
          ? { ...i, quantity: i.quantity + (item.quantity || 1) }
          : i
      );
    } else {
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    }
  });
};

  const incrementQuantity = (id) => {
    setitems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decrementQuantity = (id) => {
    setitems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const removeitem = (id) => {
    setitems((prev) => prev.filter((item) => item.id !== id));
  }
  return (
    <div>
      <CartContext.Provider value={{ cartItems, addtocart, removeitem, incrementQuantity,decrementQuantity
        , cartCount: cartItems.reduce((total, item) => total + item.quantity, 0)
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tops" element={<Tops />} />
          <Route path="/Jeans" element={<Jeans/>} />
          <Route path="/Shoes" element={<Shoes/>} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<CheckoutPage/>} />
        </Routes>
      </CartContext.Provider>
    </div>
  )
}
export default App
