import React from "react";
import "./Payment.css";

const Payment = ({ amount = 500 }) => {
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // Call your backend to create an order
    const orderResponse = await fetch("http://localhost:5000/api/payment/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const orderData = await orderResponse.json();

    if (!orderData || !orderData.id) {
      alert("Failed to create Razorpay order");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Golhars",
      description: "Purchase Handmade Artwork",
      order_id: orderData.id,
      handler: async function (response) {
        alert("Payment successful!");
        console.log("Razorpay Response:", response);

        // Optionally save order in DB via backend
        // Redirect or clear cart
      },
      prefill: {
        name: "Sania Golhar",
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F1B39F",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="payment-container">
      <h2>Complete Your Payment</h2>
      <p>Total: ₹{amount}</p>
      <button onClick={handlePayment}>Pay with Razorpay</button>
    </div>
  );
};

export default Payment;
