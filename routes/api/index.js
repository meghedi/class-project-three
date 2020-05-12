const router = require("express").Router();
const restaurantRoutes = require("./books");

// Book routes
router.use("/restaurants", restaurantRoutes);

module.exports = router;
