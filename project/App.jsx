import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import AppleTV from './components/AppleTV';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <AppleTV />
      <Footer />
    </div>
  );
}

export default App;