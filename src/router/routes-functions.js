'use strict';
const {
    users,
    product,
    order,
    cart,
    rating,
} = require('../models/index-model');

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
    console.error('Error in siginUp function',e);
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
    //AUTH
    handleSignup,
    handleGetUsers,
    handleSignin,
}