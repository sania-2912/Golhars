const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  shippingAddress: {
    address: String,
    city: String,
    postalCode: String,
    country: String,
  },
  orderItems: [
    {
      paintingId: String,
      title: String,
      quantity: Number,
      size: String,
      price: Number,
      imageUrl: String,
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
  paidAt: Date,
  razorpayPaymentId: String,
  razorpayOrderId: String,
  razorpaySignature: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Order', orderSchema);
