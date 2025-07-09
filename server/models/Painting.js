const mongoose = require("mongoose");

const PaintingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  sizes: [
    {
      label: String,
      price: Number,
    },
  ],
  images: [String],
  tags: {
    type: [String], 
    default: [],
  },
}, { timestamps: true });

module.exports = mongoose.model("Painting", PaintingSchema);
