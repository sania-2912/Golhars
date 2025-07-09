import React from "react";
import "./CartItem.css";

const CartItem = ({ item, onUpdateQty, onRemove }) => {
  const { title, price, imageUrl, size, quantity } = item;

  return (
    <div className="cart-item">
      <img src={imageUrl} alt={title} className="cart-image" />
      <div className="cart-details">
        <h3>{title}</h3>
        <p>Size: {size}</p>
        <p>Price: ₹{price}</p>
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
