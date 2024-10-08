const express = require("express");
const { createRecentView, getRecentViews, getRecentViewsByUser, updateRecentView, deleteRecentView } = require("../controllers/recent_view");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/recent-view/create",protect, createRecentView);
router.get("/recent-views/get",protect, getRecentViews);
router.get("/recent-views/user/:userId",protect, getRecentViewsByUser);
router.put("/recent-view/:id",protect, updateRecentView);
router.delete("/recent-view/:id",protect, deleteRecentView);

module.exports = router;