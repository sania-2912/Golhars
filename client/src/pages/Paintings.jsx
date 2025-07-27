import React, { useEffect, useState, useMemo } from "react";
import CardGrid from "../components/CardGrid";
import "./Paintings.css";

const Paintings = () => {
  const [allPaintings, setAllPaintings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const shuffledPaintings = useMemo(() => shuffleArray(allPaintings), [allPaintings]);

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/paintings");
        const data = await res.json();

        if (Array.isArray(data)) {
          setAllPaintings(data);
        } else {
          throw new Error("Response was not an array.");
        }
      } catch (err) {
        console.error("Error fetching paintings:", err);
        setError("Failed to load paintings.");
      } finally {
        setLoading(false);
      }
    };

    fetchPaintings();
  }, []);

  return (
    <div className="paintings-page">
      {loading && <p>Loading paintings...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && shuffledPaintings.length === 0 && <p>No paintings found.</p>}
      {!loading && !error && shuffledPaintings.length > 0 && (
        <CardGrid paintings={shuffledPaintings} />
      )}
    </div>
  );
};

export default Paintings;
