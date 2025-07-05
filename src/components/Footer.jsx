import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-6 flex justify-center items-center text-center">
        <p className="text-gray-100 text-sm">
          EasternWear &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
