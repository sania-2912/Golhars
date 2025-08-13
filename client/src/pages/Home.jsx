import React, { useEffect, useState } from "react";
import axios from "axios";
import RecommendCarousel from "../components/RecommendCarousal";
import CardGrid from "../components/CardGrid";
import { API_BASE } from "../utils/config"; 
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
        res = await axios.get(`${API_BASE}/api/paintings/recommendations/${userId}`);
      }

      if (!userId || !res.data || res.data.length === 0) {
        res = await axios.get(`${API_BASE}/api/paintings`);
      }

      setPaintings(res.data);
    } catch (error) {
      console.error("Error fetching paintings:", error);
      try {
        const fallback = await axios.get(`${API_BASE}/api/paintings`);
        setPaintings(fallback.data);
      } catch (err) {
        console.error("Error fetching fallback paintings:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading paintings...</p>;

  const randomPaintings = paintings.sort(() => 0.5 - Math.random()).slice(0, 6);

  return (
    <div className="home-container">
      {paintings.length > 0 && <RecommendCarousel paintings={paintings} />}
      <h2 className="section-title">Explore Our Collection</h2>
      <CardGrid paintings={randomPaintings} />
      <div className="view-all-container">
        <a href="/Paintings" className="view-all-btn">
          View All Paintings
        </a>
      </div>
    </div>
  );
};

export default Home;
