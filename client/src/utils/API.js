import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;

export default {
  search: function (searchRequest) {
    return axios.get(
      `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          accept: "application/json",
          "x-requested-with": "xmlhttprequest",
          "Access-Control-Allow-Origin": "*",
        },
        params: searchRequest,
      }
    );
  },
  // Gets all books
  getRestaurants: function () {
    return axios.get("/api/restaurants");
  },
  // Gets the book with the given id
  getRestaurant: function (id) {
    return axios.get("/api/restaurants/" + id);
  },
  // Deletes the book with the given id
  deleteRestaurant: function (id) {
    return axios.delete("/api/restaurants/" + id);
  },
  // Saves a book to the database
  saveRestaurant: function (bookData) {
    return axios.post("/api/restaurants", bookData);
  },
};
