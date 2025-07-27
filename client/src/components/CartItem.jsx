// src/components/CartItem.jsx
import React from "react";
import "./CartItem.css";

const CartItem = ({ item, onUpdateQty, onRemove }) => {
  const { title, image, size, quantity, price } = item;

  return (
    <div className="cart-item">
      <img className="cart-image" src={item.images?.[0] || "/placeholder.jpg"} alt={title} />

      <div className="cart-details">
        <h3>{title}</h3>
        <p><strong>Size:</strong> {size}</p>
        <p className="price">
          ₹{item.price ? item.price.toLocaleString() : "0"}
        </p>
        <div className="quantity-control">
          <button onClick={() => onUpdateQty(item, quantity - 1)} disabled={quantity <= 1}>−</button>
          <span>{quantity}</span>
          <button onClick={() => onUpdateQty(item, quantity + 1)}>+</button>
        </div>

        <button onClick={() => onRemove(item)} className="remove-btn">Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
