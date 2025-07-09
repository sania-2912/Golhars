import React from "react";
import CartItem from "../components/CartItem";
import "./Cart.css";

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to redirect to payment.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} onRemove={removeFromCart} />
          ))}

          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>
            <button onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
