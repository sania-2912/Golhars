import React from "react";
import axios from "axios";
import loadRazorpay from "../utils/loadRazorpay";

const Payment = () => {
  const handlePayment = async () => {
    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const { data } = await axios.post("http://localhost:5000/api/payment/create-order", {
      amount: 500, 
    });

    const { order } = data;

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Golhars Paintings",
      description: "Purchase Artwork",
      order_id: order.id,
      handler: async (response) => {
        const verification = await axios.post("http://localhost:5000/api/payment/verify", response);
        if (verification.data.success) {
          alert("🎉 Payment Successful!");
        } else {
          alert("❌ Payment Verification Failed.");
        }
      },
      prefill: {
        name: "Customer",
        email: "customer@example.com",
        contact: "9999999999",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div className="payment-page">
      <h2>Proceed to Payment</h2>
      <button onClick={handlePayment}>Pay ₹500</button>
    </div>
  );
};

export default Payment;
