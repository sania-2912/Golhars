const express = require("express");
const router = express.Router();
const { getAllPaintings, addPainting } = require("../controllers/paintingController");
const upload = require("../middleware/uploadMiddleware");

router.get("/", getAllPaintings);

router.post("/", upload.array("images", 5), addPainting);

module.exports = router;
