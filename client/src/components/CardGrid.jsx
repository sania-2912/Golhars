import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./CardGrid.css";

const CardGrid = ({ addToCart }) => {
  const [paintings, setPaintings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/paintings");
        setPaintings(res.data);
      } catch (err) {
        console.error("Failed to fetch paintings", err);
        setError("Unable to load paintings at the moment.");
      } finally {
        setLoading(false);
      }
    };

    fetchPaintings();
  }, []);

  if (loading) {
    return <p className="loading-message">Loading paintings...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="card-grid">
      {paintings.map((painting) => (
        <Card key={painting._id || painting.id} painting={painting} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default CardGrid;
