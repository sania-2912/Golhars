import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

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

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prev) => prev.filter((item) => item !== itemToRemove));
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/paintings" element={<Paintings addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
