import React, { useState } from "react";
import { useSelector } from "react-redux";
import loadRazorpay from "../utils/loadRazorpay";
import axios from "axios";
import "./Checkout.css";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth?.user);
  const [formData, setFormData] = useState({
    email: user?.email || "",
    firstName: user?.name?.split(" ")[0] || "",
    lastName: user?.name?.split(" ")[1] || "",
    address: "",
    country: "India",
    phone: "",
  });

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = async () => {
    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }

    try {
      const { data: order } = await axios.post("http://localhost:5000/api/payment/create-order", {
        amount: total * 100, 
      });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, 
        amount: order.amount,
        currency: order.currency,
        name: "Art Store",
        description: "Painting Purchase",
        order_id: order.id,
        handler: async function (response) {
          await axios.post("http://localhost:5000/api/payment/verify", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            amount: total,
            user,
            address: formData,
            items: cartItems,
          });
          alert("Payment Successful!");
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error("Payment error:", err);
      alert("Payment failed");
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-left">
        <h2>Contact</h2>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />

        <h2>Delivery</h2>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="India">India</option>
        </select>

        <div className="name-fields">
          <input type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} />
        </div>
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
        <button onClick={handlePayment}>Pay Now</button>
      </div>

      <div className="checkout-right">
        <h2>Order Summary</h2>
        <ul>
          {cartItems.map((item, idx) => (
            <li key={idx}>
              <span>{item.title}</span>
              <span>₹{item.price} × {item.quantity}</span>
            </li>
          ))}
        </ul>
        <h3>Total: ₹{total}</h3>
      </div>
    </div>
  );
};

export default Checkout;
