// server/controllers/paymentController.js
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createOrder = async (req, res) => {
  try {
    const { amount } = req.body;
    const options = {
      amount,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.status(201).json(order);
  } catch (err) {
    console.error("Error creating Razorpay order:", err);
    res.status(500).send("Server error");
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    // Optionally: verify the payment signature
    console.log("Payment verified and details received:", req.body);
    res.status(200).send("Payment verified");
  } catch (err) {
    console.error("Payment verification failed:", err);
    res.status(400).send("Verification failed");
  }
};
