// components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-800 text-white py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Welcome to Zay Tshirt Design</h1>
          <p className="text-lg mb-8">
            We offer high-quality t-shirt printing services for individuals and businesses.
          </p>
          <button className="bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-200">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Hero Image"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;