const express = require("express");
const { createRecentView, getRecentViews, deleteRecentView } = require("../controllers/recent_view");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/recent-view/create",protect, createRecentView);
router.get("/recent-views/get",protect, getRecentViews);
router.delete("/recent-view/:id",protect, deleteRecentView);

module.exports = router;