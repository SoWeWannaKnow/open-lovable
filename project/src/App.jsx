import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import AppleTV from './components/AppleTV';
import Footer from './components/Footer';
import ProductDetail from './pages/product-detail';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-white">
          <Header />
          <Hero />
          <Products />
          <AppleTV />
          <Footer />
        </div>
      } />
      <Route path="/pages/product-detail" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;