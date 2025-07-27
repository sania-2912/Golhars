import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "@redux/cartSlice";
import "./CardGrid.css";

const CardGrid = ({ paintings = [] }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (painting) => {
    const selectedSize = 'medium';
    const sizeData = painting.sizes?.find(s => s.size === selectedSize);

    if (!sizeData) {
      alert('Selected size not available');
      return;
    }

    const itemToAdd = {
      _id: painting._id,
      title: painting.title,
      image: painting.images?.[0] || '',
      size: selectedSize,
      price: sizeData.price,
      quantity: 1,
    };

    dispatch(addToCart(itemToAdd));
  };

  if (!Array.isArray(paintings)) {
    console.error("Expected 'paintings' to be an array but got:", paintings);
    return <div>No paintings to show</div>;
  }

  return (
    <div className="card-grid">
      {paintings.map((painting) => (
        <div key={painting._id} className="card">
          <Link to={`/painting/${painting._id}`}>
            <img
              src={painting.images?.[0] || "/placeholder.jpg"}
              alt={painting.title}
              className="card-img"
            />
          </Link>
          <div className="card-info">
            <h3>{painting.title}</h3>
            <p>Rs. {painting.sizes?.[0]?.price || "N/A"}</p>
            <Link to={`/painting/${painting._id}`}>
              <button className="view-details-btn">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
