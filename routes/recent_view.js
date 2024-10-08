const express = require("express");
const { createRecentView, getRecentViews, getRecentViewsByUser, updateRecentView, deleteRecentView } = require("../controllers/recent_view");


const router = express.Router();

router.post("/recent-view/create", createRecentView);
router.get("/recent-views/get", getRecentViews);
router.get("/recent-views/user/:userId", getRecentViewsByUser);
router.put("/recent-view/:id", updateRecentView);
router.delete("/recent-view/:id", deleteRecentView);

module.exports = router;
