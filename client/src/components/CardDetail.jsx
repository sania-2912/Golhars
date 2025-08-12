import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./CardDetail.css";

const CardDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [painting, setPainting] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleAddToCart = () => {
    const size = selectedSize || painting.sizes[0];
    dispatch(
      addToCart({
        ...painting,
        size: size.label,
        price: size.price,
        quantity: 1,
      })
    );
  };

  useEffect(() => {
    const fetchPainting = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/paintings/${id}`);
        const data = await res.json();
        setPainting(data);

        // Update localStorage viewedTags as array
        if (data.tags?.length > 0) {
          const newTags = data.tags.map((tag) => tag.trim().toLowerCase());
          const storedTags = JSON.parse(localStorage.getItem("viewedTags")) || [];
          const combined = [...new Set([...storedTags, ...newTags])];
          localStorage.setItem("viewedTags", JSON.stringify(combined));
        }
      } catch (err) {
        console.error("Failed to fetch painting:", err);
      }
    };

    fetchPainting();
  }, [id]);

  if (!painting) return <div className="card-detail-loading">Loading...</div>;

  const size = selectedSize || painting.sizes[0];

  return (
    <div className="detail-wrapper">
      <div className="detail-image-section">
        <img src={painting.images[0]} alt={painting.title} className="main-image" />
        <div className="thumbs">
          {painting.images.map((img, idx) => (
            <img key={idx} src={img} alt={`thumb-${idx}`} className="thumb" />
          ))}
        </div>
      </div>

      <div className="detail-info-section">
        <h1 className="detail-title">{painting.title}</h1>
        <p className="detail-price">Rs. {size.price}.00</p>

        <div className="size-selector">
          <span className="size-label">Select Size:</span>
          <div className="size-buttons">
            {painting.sizes.map((s, idx) => (
              <button
                key={idx}
                className={`size-btn ${selectedSize?.label === s.label ? "active" : ""}`}
                onClick={() => setSelectedSize(s)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <button onClick={handleAddToCart}>Add to Cart</button>

        <div className="detail-description">
          {painting.description.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
