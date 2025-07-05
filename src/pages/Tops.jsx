import React,{useContext} from "react";
import tops from '../data/tops.json';
import ItemCard from '../components/ItemCard';
import Header from '../components/Header';
import CartContext from "../CartContext"; 
import Footer from "../components/Footer"
import Offer from "../components/homepage/Offer"
const Tops = () => {
    const {addtocart}=  useContext(CartContext);
  return (
    <div>
      <Header />
       
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tops.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            slug={item.slug}
            onAddToCart={() => addtocart(item)}
          />
        ))}
      </div>
      <Offer/>
      <Footer />
    </div>
    
  );
};

export default Tops;
