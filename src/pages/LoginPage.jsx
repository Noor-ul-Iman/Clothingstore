import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex justify-center items-center px-4 py-10 sm:py-16">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-md shadow-md"
        >
          <h2 className="text-center text-2xl font-semibold mb-8">LOGIN</h2>

          <label
            htmlFor="email"
            className="block text-sm font-semibold mb-1"
          >
            USERNAME OR EMAIL ADDRESS *
          </label>
          <input
            id="email"
            type="email"
            className="w-full border border-gray-300 px-4 py-3 mb-6 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label
            htmlFor="password"
            className="block text-sm font-semibold mb-1"
          >
            PASSWORD *
          </label>
          <div className="relative mb-6">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 select-none"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') setShowPassword(!showPassword); }}
            >
            </span>
          </div>

          <div className="flex items-center justify-between mb-6 text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-pink-600"
              />
              <span className="ml-2 font-semibold">REMEMBER ME</span>
            </label>

            <Link to="/reset-password" className="underline hover:text-pink-600">
              Lost Your Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-black hover:bg-pink-600 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            LOG IN
          </button>

          <p className="text-center mt-8 text-sm">
            Not A Member?{' '}
            <Link to="/register" className="underline hover:text-pink-600">
              Register
            </Link>
          </p>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
