'use strict';
const { response } = require('express');
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
const {
  route
} = require('./routes');

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
  const id2 = req.user.id;
  const obj = req.body;
  obj.user_id = id2;
  let updatedRecord = await order.update(id,obj,id2)
  res.status(200).json(updatedRecord);

  if (updatedRecord) {
    if (updatedRecord[0] != 0) {
      res.status(201).json(updatedRecord[1]);
    } else {
      res.status(403).send(`There is no model with this id: ${id}`);
    }
  } else {

    res.status(403).send(`You can not update posts of other users !!`);
  }
}


//DELETE orders

async function handleDeleteorder(req, res) {
  let id = req.params.id;
  const id2 = req.user.id;
  let deletedRecord = await order.delete(id, id2);
  if (deletedRecord == 0){
    res.status(200).send("Access denied");
  }
  res.status(200).json(deletedRecord);
}



/*................Cart................*/
async function handleCreateCart(req, res) {
  let id = req.user.id;
  let obj = req.body;
  obj.user_id = id;
  let newRecord = await cart.create(obj);
  res.status(201).json(newRecord);
}

async function handleGetAllCart(req, res) {
  const id = req.params.id;
  const id2 = req.user.id;
  if (id == id2) {
    let allRecords = await cart.getAll(id);
    res.status(200).json(allRecords);
  } else {
    res.send("Access denied");
  }
}

async function handleDeleteCart(req, res) {
  // make shore that just user can delete his own cart 
  let id = req.params.id;
  const id2 = req.user.id;
  let deletedRecord = await cart.delete(id, id2);
  if (deletedRecord == 0){
    res.status(200).send("Access denied");
  }
  res.status(200).json(deletedRecord);
}
/*...............End Cart..............*/

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
  //Handle Cart :
  handleCreateCart,
  handleGetAllCart,
  handleDeleteCart,
}