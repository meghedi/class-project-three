const router = require("express").Router();
const restaurantRoutes = require("./retaurants");
const searchRoutes = require("./search");

// Book routes
router.use("/restaurants", restaurantRoutes);
//router.use("/search", searchRoutes);


module.exports = router;
