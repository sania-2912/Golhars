const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Testimonial", testimonialSchema);
