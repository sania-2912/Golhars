import React, { useEffect, useState } from "react";
import axios from "axios";
import RecommendCarousel from "../components/RecommendCarousal";
import CardGrid from "../components/CardGrid"; // using existing card grid
import "./Home.css";

const Home = () => {
  const [paintings, setPaintings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPaintings();
  }, []);

  const fetchPaintings = async () => {
    try {
      const userId = localStorage.getItem("userId");
      let res;

      if (userId) {
        res = await axios.get(
          `http://localhost:5000/api/paintings/recommendations/${userId}`
        );
      }

      if (!userId || !res.data || res.data.length === 0) {
        res = await axios.get("http://localhost:5000/api/paintings");
      }

      setPaintings(res.data);
    } catch (error) {
      console.error("Error fetching paintings:", error);
      try {
        const fallback = await axios.get("http://localhost:5000/api/paintings");
        setPaintings(fallback.data);
      } catch (err) {
        console.error("Error fetching fallback paintings:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading paintings...</p>;

  // Get exactly 6 random paintings for the bottom grid
  const randomPaintings = paintings
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  return (
    <div className="home-container">
      {/* Carousel Section */}
      {paintings.length > 0 && <RecommendCarousel paintings={paintings} />}

      {/* Random Paintings Section */}
      <h2 className="section-title">Explore Our Collection</h2>
      <CardGrid paintings={randomPaintings} /> {/* reusing existing grid */}

      {/* View All Button */}
      <div className="view-all-container">
        <a href="/Paintings" className="view-all-btn">
          View All Paintings
        </a>
      </div>
    </div>
  );
};

export default Home;
