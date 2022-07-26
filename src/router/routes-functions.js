'use strict';
const {
  users,
  product,
  order,
  cart,
  rating,
  catagory,
  type,
  massage,
  wishlist,
  shipping,
} = require('../models/index-model');
const { route } = require('./routes');

function homePage(req, res) {
  res.status(200).send('SOOQNA E-COMMERCE');
}


//Auth

async function handleSignup(req, res, next) {
  try {
    let userRecord = await users.create(req.body);
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(201).json(output);
  } catch (e) {
    console.error('Error in siginUp function', e);
    next(e.message);
  }
}

async function handleGetUsers(req, res, next) {
  try {
    const userRecords = await users.findAll({});
    const list = userRecords.map(user => user.username);
    res.status(200).json(list);
  } catch (e) {
    // console.error(e);
    next(e.message);
  }
}

async function handleSignin(req, res, next) {
  try {
    const user = {
      user: req.user,
      token: req.user.token
    };
    res.status(200).json(user);
  } catch (e) {
    next(e.message);
  }
}

//Create orders 

async function handleCreateorder(req, res) {
  let obj = req.body;
  obj.user_id = req.user.id;
  let newRecord = await order.create(obj);
  res.status(201).json(newRecord);
}
//UPDET orders
async function handleUpdateorder(req, res) {
  const id = req.params.id;
  const obj = req.body;
  obj.user_id = req.user.id;
  let updatedRecord = await req.order.update(id, obj)
  res.status(200).json(updatedRecord);
}
//DELETE orders

async function handleDeleteorder(req, res) {
  let id = req.params.id;
  let deletedRecord = await req.model.delete(id);
  res.status(204).json({});
}

module.exports = {
  //API
  homePage,
  //AUTH
  handleSignup,
  handleGetUsers,
  handleSignin,
  handleCreateorder,
  handleUpdateorder,
  handleDeleteorder,
}