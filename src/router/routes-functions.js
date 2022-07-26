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

function homePage(req, res) {
  res.status(200).send('SOOQNA E-COMMERCE');
}


// APT

//Products Routes Functions:

async function getAllProducts(req, res) {
  const id = req.params.id;
  let allRecords = await  product.getAll(id);
  res.status(200).json(allRecords);
}

// async function handleGetOne(req, res) {
//   const id = req.params.id;
//   // console.log(id);
//   let theRecord = await req.model.get(id)
//   res.status(200).json(theRecord);
// }

async function createProduct(req, res) {
  let id = req.user.id;
  let obj = req.body;
  obj.user_id = id;
  let newRecord = await product.create(obj);
  res.status(201).json(newRecord);
}

async function updateProduct(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await req.model.update(id, obj)
  res.status(200).json(updatedRecord);
}

async function DeleteProduct(req, res) {
  let id = req.params.id;
  let deletedRecord = await req.model.delete(id);
  // console.log('ddddddddddddd',deletedRecord);
  res.status(204).json({});
  // res.status(204).send('Record is deleted Successfully')
}

async function DeleteAllProduct(req, res) {
  let id = req.params.id;
  let deletedRecord = await req.model.deleteAll();
  // console.log('ddddddddddddd',deletedRecord);
  res.status(204).json({});
  // res.status(204).send('Record is deleted Successfully')
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

module.exports = {
  //API
  homePage,

  // Products Functions:
  getAllProducts,
  createProduct,
  updateProduct,
  DeleteProduct,
  DeleteAllProduct,

  //AUTH
  handleSignup,
  handleGetUsers,
  handleSignin,
}