const { Readable } = require("stream");
const Painting = require("../models/Painting");
const cloudinary = require("../config/cloudinary");

// @desc    Get all paintings
// @route   GET /api/paintings
const getAllPaintings = async (req, res) => {
  try {
    const paintings = await Painting.find().sort({ createdAt: -1 });
    res.json(paintings);
  } catch (err) {
    console.error("❌ Fetch error:", err);
    res.status(500).json({ error: "Failed to fetch paintings." });
  }
};

// @desc    Upload a new painting
// @route   POST /api/paintings
const addPainting = async (req, res) => {
  try {
    const { title, description, sizes, tags } = req.body;

    const parsedSizes = JSON.parse(sizes);
    const parsedTags = tags ? JSON.parse(tags) : [];

    // Upload all images to Cloudinary
    const imageUploadPromises = req.files.map((file) => {
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "golhars_paintings" },
          (error, result) => {
            if (error) {
              console.error("❌ Cloudinary upload error:", error);
              reject(error);
            } else {
              resolve(result.secure_url);
            }
          }
        );

        const bufferStream = new Readable();
        bufferStream.push(file.buffer);
        bufferStream.push(null);
        bufferStream.pipe(uploadStream);
      });
    });

    const imageUrls = await Promise.all(imageUploadPromises);

    const newPainting = new Painting({
      title,
      description,
      sizes: parsedSizes,
      images: imageUrls,
      tags: parsedTags,
    });

    const saved = await newPainting.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("❌ Upload error:", err);
    res.status(500).json({ error: "Something went wrong while uploading." });
  }
};

module.exports = {
  getAllPaintings,
  addPainting,
};
