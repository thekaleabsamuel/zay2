// components/Footer.jsx
import React from 'react';

const footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col items-center">
                <h3 className="text-xl font-bold mb-4">Zay Tshirt Design</h3>
                <p className="text-center mb-4">
                    &copy; {new Date().getFullYear()} Zay Tshirt Design. All rights reserved.
                </p>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="hover:text-gray-400">
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-400">
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-400">
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default footer;
