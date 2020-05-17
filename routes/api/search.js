const router = require("express").Router();
const axios = require("axios");
const apiKey = process.env.REACT_APP_API_KEY;

router.route("/").get(function (req, res) {
  axios
    .get(
      `https://api.yelp.com/v3/businesses/search?term=sushi&location=91206`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          accept: "application/json",
          "x-requested-with": "xmlhttprequest",
          "Access-Control-Allow-Origin": "*",
        }
      }
    )
    .then(res => res.json({status:true}))
    .catch(err => res.status(422).json(err)); 
  // res.json({status: true});
});

module.exports = router;
