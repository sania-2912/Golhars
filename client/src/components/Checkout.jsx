import React from "react";
import "./Checkout.css";

const Checkout = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleProceedToPayment = () => {
    // Navigate to payment page
    window.location.href = "/payment";
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-summary">
        <h3>Order Summary</h3>
        {cartItems.map((item, index) => (
          <div className="checkout-item" key={index}>
            <img src={item.imageUrl} alt={item.title} />
            <div>
              <p>{item.title}</p>
              <p>₹{item.price}</p>
            </div>
          </div>
        ))}

        <h3>Total: ₹{total}</h3>
        <button onClick={handleProceedToPayment}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Checkout;
