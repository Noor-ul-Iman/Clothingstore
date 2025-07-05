import React, { useState, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartContext from '../CartContext';

const CheckoutPage = () => {
    const { cartItems } = useContext(CartContext);

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [country, setCountry] = useState('United States (US)');
    const [streetaddress, setStreetaddress] = useState('');
    const [apartment, setApartment] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('California');
    const [zipcode, setZipcode] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [ordernotes, setOrdernotes] = useState('');
    const [coupon, setCoupon] = useState('');

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 30;
    const total = subtotal + shipping;

    return (
        <div>
            <Header />
            <div>
                <h2 className="text-2xl font-bold mb-6 mt-5 uppercase text-center">Checkout</h2>

                <div className="flex flex-col lg:flex-row justify-between px-10 py-10 gap-10">
   <div className="w-full lg:w-2/3">
                        <h3 className="text-xl font-semibold mb-7">Billing Details</h3>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1 font-semibold text-left">First Name *</label>
                                <input value={firstname} onChange={e => setFirstname(e.target.value)}
                                    required className="w-full p-2 border border-gray-400" />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold text-left">Last Name *</label>
                                <input value={lastname} onChange={e => setLastname(e.target.value)}
                                    required className="w-full p-2 border border-gray-400" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block mb-1 font-semibold text-left">Country / Region *</label>
                                <select value={country} onChange={e => setCountry(e.target.value)}
                                    className="w-full p-2 border border-gray-400">
                                    <option>United States (US)</option>
                                    <option>Canada</option>
                                    <option>United Kingdom</option>
                                    <option>Australia</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block mb-1 font-semibold text-left">Street Address *</label>
                                <input value={streetaddress} onChange={e => setStreetaddress(e.target.value)}
                                    placeholder="House number and street name"
                                    className="w-full p-2 border border-gray-400 mb-2" />
                                <input value={apartment} onChange={e => setApartment(e.target.value)}
                                    placeholder="Apartment, suite, unit, etc. (optional)"
                                    className="w-full p-2 border border-gray-400" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block mb-1 font-semibold text-left">Town / City *</label>
                                <input value={city} onChange={e => setCity(e.target.value)}
                                    className="w-full p-2 border border-gray-400" />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold text-left">State *</label>
                                <select value={state} onChange={e => setState(e.target.value)}
                                    className="w-full p-2 border border-gray-400">
                                    <option>none</option>
                                    <option>California</option>
                                    <option>Texas</option>
                                    <option>New York</option>
                                    <option>Florida</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold text-left">ZIP Code *</label>
                                <input value={zipcode} onChange={e => setZipcode(e.target.value)}
                                    className="w-full p-2 border border-gray-400" />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold text-left">Phone *</label>
                                <input value={phone} onChange={e => setPhone(e.target.value)}
                                    className="w-full p-2 border border-gray-400" />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold text-left">Email Address *</label>
                                <input value={email} onChange={e => setEmail(e.target.value)}
                                    className="w-full p-2 border border-gray-400" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block mb-1 font-semibold text-left">Order Notes (optional)</label>
                                <textarea value={ordernotes} onChange={e => setOrdernotes(e.target.value)}
                                    className="w-full p-2 border border-gray-400"
                                    placeholder="Notes about your order, e.g. special notes for delivery." />
                            </div>
                        </form>
                    </div>
                    {/* Order Summary */}
                    <div className="w-full lg:w-1/3 border border-gray-300 p-6 bg-white shadow-md">
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2 text-left">COUPON CODE</label>
                            <div className="flex gap-2">
                                <input value={coupon} onChange={e => setCoupon(e.target.value)}
                                    placeholder="Enter code" className="w-full p-2 border border-gray-400" />
                                <button className="bg-black text-white px-4 py-2 cursor-pointer">Apply</button>
                            </div>
                        </div>

                        <h3 className="text-lg font-bold pb-2 mb-4">YOUR ORDER</h3>

                        {cartItems.length === 0 ? (
                            <p className="text-gray-600 mb-4">Your cart is empty.</p>
                        ) : (
                            <>
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center mb-2">
                                        <span>{item.name} × {item.quantity}</span>
                                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}

                                <hr className="my-2" />

                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">SUBTOTAL</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>

                                <hr className="my-2" />

                                <div className="mb-4">
                                    <span className="font-semibold block mb-1 text-left">SHIPPING</span>
                                    <label className="block mb-2 text-left">
                                        <input type="radio" name="shipping" defaultChecked className="mr-2" />
                                        Flat rate: <span>${shipping.toFixed(2)}</span>
                                    </label>
                                    <label className="block text-left">
                                        <input type="radio" name="shipping" className="mr-2" />
                                        Local pickup
                                    </label>
                                </div>

                                <div className="flex justify-between text-lg font-bold border-t border-gray-300 pt-2 mb-4">
                                    <span>TOTAL</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </>
                        )}

                        <div className="mb-4">
                            <p className="font-semibold mb-2 text-left">PAYMENT METHOD</p>
                            <label className="block mb-2">
                                <input type="radio" name="payment" defaultChecked className="mr-2" />
                                Check payments
                            </label>
                            <p className="text-sm text-gray-600 mb-2 ml-6">
                                Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                            </p>
                            <label className="block">
                                <input type="radio" name="payment" className="mr-2" />
                                Cash on delivery
                            </label>
                        </div>

                        <div className="mb-4">
                            <label className="text-sm">
                                <input type="checkbox" className="mr-2" />
                                I have read and agree to the website <a href="#" className="underline">terms and conditions</a> *
                            </label>
                        </div>

                        <button
                            disabled={cartItems.length === 0}
                            className={`w-full p-3 font-semibold uppercase ${
                                cartItems.length === 0
                                    ? 'bg-gray-400 text-white cursor-not-allowed'
                                    : 'bg-black text-white hover:bg-pink-600'
                            }`}
                        >
                            Place Order
                        </button>
                    </div>

                    {/* Billing Form */}
                 
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CheckoutPage;
