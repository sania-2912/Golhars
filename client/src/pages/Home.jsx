import React, { useEffect, useState } from "react";
import axios from "axios";
import CardGrid from "../components/CardGrid";
import "./Home.css";

const Home = () => {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const tags = localStorage.getItem("viewedTags") || "sunset,ocean";

    axios
      .get(`/api/recommend?tags=${tags}`)
      .then((res) => {
        const data = res.data;
        if (Array.isArray(data)) {
          setRecommended(data);
        } else {
          console.error("Recommendation response was not an array:", data);
          setRecommended([]);
        }
      })
      .catch((err) =>
        console.error("Error fetching recommendations:", err)
      );
  }, []);

  return (
    <div className="home-container">
      <h2 className="home-section-title">Recommended for You</h2>
      <CardGrid paintings={recommended} />
    </div>
  );
};

export default Home;
