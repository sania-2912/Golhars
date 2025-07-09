// src/pages/Home.jsx
import React from "react";
import CardGrid from "../components/CardGrid";
import "./Home.css";

const Home = ({ addToCart }) => {
  return (
    <div className="home-container">
      <h1>Golhars Paintings</h1>
      <CardGrid addToCart={addToCart} />
    </div>
  );
};

export default Home;
