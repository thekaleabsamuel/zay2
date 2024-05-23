// pages/Home.jsx
import React, { useEffect, useRef } from 'react';
// import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonial';
import Footer from './Footer';

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = 'Zay Tshirt Design';
    let index = 0;

    const animateText = () => {
      if (index < text.length) {
        textRef.current.textContent += text.charAt(index);
        index++;
        setTimeout(animateText, 100); // Adjust the delay between each character (in milliseconds)
      }
    };

    animateText();
  }, []);

  return (
    <div>
      <h1 ref={textRef}></h1>
      {/* <Header /> */}
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;