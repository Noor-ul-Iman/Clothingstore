import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RegisterPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex justify-center items-center px-4 py-10 sm:py-16">
        <form onSubmit={handleSubmit} className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
          <h2 className="font-semibold mb-6 text-3xl text-center">Register</h2>

          <label className="block mb-1 font-semibold text-sm text-left" htmlFor="email">
            Email*
          </label>
          <input
            id="email"
            type="email"
            className="border border-gray-300 px-4 py-3 mb-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <p className="w-full py-2 mb-6 text-sm text-gray-600">
            Your credentials will be sent on your email.
          </p>

          <button
            type="submit"
            className="w-full bg-black text-white hover:bg-pink-600 py-3 rounded-md transition duration-300"
          >
            Register
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterPage;
