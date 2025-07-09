import React, { useEffect, useState } from "react";
import CardGrid from "../components/CardGrid";
import "./Paintings.css";

const Paintings = ({ addToCart }) => {
  const [allPaintings, setAllPaintings] = useState([]);

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/paintings");
        const data = await res.json();
        setAllPaintings(data);
      } catch (err) {
        console.error("Error fetching paintings:", err);
      }
    };

    fetchPaintings();
  }, []);

  return (
    <div className="paintings-page">
      <h1>All Paintings</h1>
      <CardGrid paintings={allPaintings} addToCart={addToCart} />
    </div>
  );
};

export default Paintings;
