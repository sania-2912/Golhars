import React, { useState } from "react";
import "./Card.css";

const Card = ({ painting, addToCart }) => {
  const { title, images, artist, description, prices } = painting;
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  const handleAddToCart = () => {
    const cartItem = {
      title,
      image: images[currentImage],
      size,
      price: prices[size],
      quantity,
    };
    addToCart(cartItem);
  };

  return (
    <div className="painting-card">
      <div className="image-container">
        <img src={images[currentImage]} alt={title} />
        <div className="image-thumbnails">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              className={currentImage === i ? "active" : ""}
              onClick={() => setCurrentImage(i)}
            />
          ))}
        </div>
      </div>

      <div className="info">
        <h3>{title}</h3>
        <p className="artist">By {artist}</p>
        <p className="description">{description}</p>

        <div className="size-selector">
          <label>Size:</label>
          {["S", "M", "L"].map((s) => (
            <button
              key={s}
              className={s === size ? "active" : ""}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <p className="price">Price: ₹{prices[size]}</p>

        <div className="quantity-selector">
          <label>Qty:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>

        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
