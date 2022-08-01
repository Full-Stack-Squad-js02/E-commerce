'use strict';
const {
  rating,
} = require('../models/index-model');



// user add rating on specific product

async function addRating(req, res) {
  let userId = req.user.id;
  let obj = req.body;
  let productId = req.params.id
  obj.user_id = userId;
  obj.product_id = productId;

  let newRating= await rating.create(obj);
  res.status(201).json(newRating);
}








module.exports = addRating;