import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div>
        <Header/>
    <div className=" py-5 px-5">
      <h2 className="text-3xl font-semibold text-center mb-10">CONTACTS US</h2>

      <div className="grid md:grid-cols-2 max-w-6xl mx-auto">
        <div>
          <h3 className="text-xl font-bold mb-6">SEND YOUR QUESTION</h3>

          <form onSubmit={handleSend}>
            <label className="block text-sm font-bold mb-1 text-left">YOUR NAME</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-400 p-2 mb-4"
              required
            />

            <label className="block text-sm font-bold mb-1 text-left">YOUR EMAIL</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-400 p-2 mb-4"
              required
            />

            <label className="block text-sm font-bold mb-1 text-left">YOUR MESSAGE</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-400 p-2 mb-4 h-40"
              required
            ></textarea>

            <button
              type="submit"
              className="border border-black w-full py-2 font-semibol hover:bg-pink-600 bg-black text-white transition duration-500"
            >
              SEND
            </button>

            {sent && (
              <div className="mt-4 border border-green-600 bg-green-100 text-green-800 px-4 py-2">
                Your message has been sent.
              </div>
            )}
          </form>
        </div>

        <div className="space-y-5 ml-10">
          <h3 className="font-bold text-left">ADDRESS</h3>
          <p className="text-sm flex items-center gap-2">
            <FaMapMarkerAlt  /> 725 5th Ave, New York, NY 10022, USA
          </p>

          <h4 className="font-bold text-left">PHONES</h4>
          <p className="text-sm flex items-center gap-2">
            <FaPhoneAlt  /> 712-339-9294
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaPhoneAlt /> 712-339-9295
          </p>

          <h4 className="font-bold text-left">EMAIL</h4>
          <p className="text-sm flex items-center gap-2">
            <FaEnvelope  /> info@moderno-theme.com
          </p>

          <h4 className="font-bold text-left">WORKING HOURS</h4>
          <p className="text-sm flex items-center gap-2">
            <FaClock  /> Mon-Fri: 10:00 - 18:00
          </p>

          <h4 className="font-bold text-left">FOLLOW US</h4>
          <div className="flex gap-4 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-pink-600" />
            <FaTwitter className="cursor-pointer hover:text-pink-600" />
            <FaWhatsapp className="cursor-pointer hover:text-pink-600" />
            <FaYoutube className="cursor-pointer hover:text-pink-600" />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ContactPage;