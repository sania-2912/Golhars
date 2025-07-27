import React, { useState } from "react";
import { useSelector } from "react-redux";
import loadRazorpay from "../utils/loadRazorpay";
import axios from "axios";
import "./Checkout.css";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items || []);
  const [userInfo, setUserInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
  });

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handlePay = async () => {
    const sdk = await loadRazorpay();
    if (!sdk) return alert("Failed to load Razorpay SDK.");

    try {
      const { data: order } = await axios.post("/api/payment/create-order", { amount: total });
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Golhars",
        order_id: order.id,
        description: "Art Purchase",
        handler: (res) => axios.post("/api/payment/verify", {
          ...res,
          amount: total,
          user: userInfo,
          items: cartItems,
        }).then(() => alert("Payment successful!")),
        prefill: {
          name: `${userInfo.firstName} ${userInfo.lastName}`,
          email: userInfo.email,
          contact: userInfo.phone,
        },
        theme: { color: "#222" },
      };
      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      alert("Payment initiation failed.");
    }
  };

  return (
    <div className="checkout-wrapper">
      <section className="checkout-form-section">
        <h2>Contact & Shipping</h2>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <input name="firstName" type="text" placeholder="First name" onChange={handleChange} />
        <input name="lastName" type="text" placeholder="Last name" onChange={handleChange} />
        <textarea name="address" placeholder="Shipping address" onChange={handleChange}></textarea>
        <input name="phone" type="tel" placeholder="Phone number" onChange={handleChange} />
        <button className="pay-btn" onClick={handlePay}>
          Pay ₹{total.toLocaleString()}
        </button>
      </section>

      <section className="checkout-summary-section">
        <h2>Order summary</h2>
        {cartItems.map((item, idx) => (
          <div className="summary-item" key={idx}>
            <img src={item.images[0]} alt={item.title} />
            <div className="summary-info">
              <p>{item.title}</p>
              <p>₹{item.price.toLocaleString()} × {item.quantity}</p>
            </div>
          </div>
        ))}
        <hr />
        <div className="summary-total">
          <p>Subtotal</p>
          <p>₹{total.toLocaleString()}</p>
        </div>
        <div className="summary-total">
          <strong>Total</strong>
          <strong>₹{total.toLocaleString()}</strong>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
