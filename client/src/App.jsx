import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Login from "./pages/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import Paintings from "./pages/Paintings";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import CardDetail from "./components/CardDetail";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prev) => prev.filter((item) => item !== itemToRemove));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Router>
      <div className="app-layout">
        <Navbar cartCount={cartItems.length} />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/paintings" element={<Paintings addToCart={addToCart} />} />
            <Route path="/painting/:id" element={<CardDetail />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment" element={<Payment amount={total} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
