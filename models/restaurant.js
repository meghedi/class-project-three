const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: [], required: true },
  description: String,
  image : String,
  link: String
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;