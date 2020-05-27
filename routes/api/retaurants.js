const router = require("express").Router();
const restaurantsController = require("../../controllers/restaurantsController");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

function test(req, res, next){
  console.log("hello world mine!");
  next();
}

const checkJwt = jwt({
  // Provide a signing key
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,

    // This is the same as issuer (see below),
    // with '.well-known/jwks.json' added to the end of it (after the last slash)
    jwksUri: `https://uclaprojectthree.auth0.com/.well-known/jwks.json`,
  }),

  // Audience comes from your API setup on the
  // Auth0 website (APIs => click the API you setup... not the Management API)
  // The "Identifier" can be plugged in as the audience string here
  audience: `https://fivestarapi/api`,

  // The issuer comes from the Application setup on the Auth0 website (Applications => click your app)
  // The issuer is the same as the Domain field
  issuer: `https://uclaprojectthree.auth0.com/`,
  algorithms: ["RS256"],
});

// Matches with "/api/restaurants"

router.route("/").all(checkJwt)
  .post(restaurantsController.create);

  router.route("/").all(checkJwt)
  .get(restaurantsController.findAll)

// Matches with "/api/restaurants/:id"
router
  .route("/:id")
  .get(restaurantsController.findById)
  .put(restaurantsController.update)
  .delete(restaurantsController.remove);

module.exports = router;