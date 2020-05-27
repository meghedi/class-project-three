import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;

export default {
  search: async function (searchRequest) {
    return await axios.get(
      `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?categories=restaurants,All`,
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
  getRestaurants: function (user,token) {
    return axios.get("/api/restaurants/?user=" + user, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
       });
  },
  // Gets the book with the given id
  getRestaurant: function (id, token) {
    return axios.get("/api/restaurants/" + id, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
       });
  },
  // Deletes the book with the given id
  deleteRestaurant: function (id) {
    return axios.delete("/api/restaurants/" + id);
  },
  // Saves a book to the database
  saveRestaurant: function (searchData, token) {
    console.log(token);
    return axios.post("/api/restaurants", searchData, {
     headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },
};
