// components/Services.jsx
import React from 'react';

const Services = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">T-Shirt Printing</h3>
            <p>
              We offer high-quality t-shirt printing services for individuals and businesses.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Custom Design</h3>
            <p>
              Our talented designers can create custom designs tailored to your needs.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Bulk Orders</h3>
            <p>
              We offer discounts for bulk orders, making us a great choice for businesses and events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;