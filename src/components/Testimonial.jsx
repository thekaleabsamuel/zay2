// components/Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="mb-4">
              "I ordered custom t-shirts for our company event, and the quality was outstanding. Highly recommended!"
            </p>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Customer Avatar"
                className="rounded-full h-10 w-10 mr-4"
              />
              <span className="font-bold">John Doe</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="mb-4">
              "The design team really captured the essence of what I was looking for. Great service!"
            </p>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Customer Avatar"
                className="rounded-full h-10 w-10 mr-4"
              />
              <span className="font-bold">Jane Smith</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="mb-4">
              "I've ordered from Zay Tshirt Design multiple times, and they never disappoint. Highly recommended!"
            </p>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Customer Avatar"
                className="rounded-full h-10 w-10 mr-4"
              />
              <span className="font-bold">Bob Johnson</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;