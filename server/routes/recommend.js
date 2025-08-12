const express = require("express");
const Painting = require("../models/Painting.js");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const tags = req.body.tags || [];

    if (!tags.length) {
      const fallback = await Painting.find()
        .sort({ views: -1 })
        .limit(4) 
        .lean();
      return res.json(fallback);
    }
    const tagFrequency = {};
    tags.forEach(tag => {
      tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
    });

    const recommended = await Painting.find({
      tags: { $in: Object.keys(tagFrequency) }
    }).lean();

    recommended.sort((a, b) => {
      const aScore = a.tags.reduce((sum, tag) => sum + (tagFrequency[tag] || 0), 0);
      const bScore = b.tags.reduce((sum, tag) => sum + (tagFrequency[tag] || 0), 0);
      return bScore - aScore;
    });

    res.json(recommended.slice(0, 4)); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
