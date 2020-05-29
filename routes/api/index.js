const router = require("express").Router();
const restaurantRoutes = require("./retaurants");

// Book routes
router.use("/restaurants", restaurantRoutes);

module.exports = router;
