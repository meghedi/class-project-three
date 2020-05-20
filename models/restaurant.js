const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
  restaurant: { type: String, required: true },
  cuisines: { type: [], required: true },
  rating: {type: Number},
  location: String,
  image : String,
  link: String
});
const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;