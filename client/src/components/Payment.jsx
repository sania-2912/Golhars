import React, { useState } from "react";
import "./Payment.css";

const Payment = () => {
  const [processing, setProcessing] = useState(false);

  const handlePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      alert("Payment Successful!");
      window.location.href = "/";
    }, 1500);
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <p>This is a dummy payment screen for testing.</p>
      <button onClick={handlePayment} disabled={processing}>
        {processing ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default Payment;
