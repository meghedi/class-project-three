const db = require("../models");

// Defining methods for the restaurantsController
module.exports = {
  findAll: function (req, res) {
    console.log(req.query);
    db.restaurant
      .find(req.query)
      .then((dbModel) => {
        res.json(dbModel);
        console.log(req.user);
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.restaurant
      .findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
     db.restaurant.find({restaurantId: req.body.restaurantId}, (err, result)=>{
       if(!result.length){
         db.restaurant
         .create({...req.body, user:req.user.sub})
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
       }else{
         return;
       }
       if(err) return;
     });
  },
  update: function (req, res) {
    db.restaurant
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.restaurant
      .findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
