'use strict';
const io = require('socket.io-client');
let host = `http://localhost:3000/`;

const serverConnection= io.connect(host);

const {
  users,
  cart,
  wishlist,
} = require('../models/index-model');

function homePage(req, res) {
  res.status(200).send('SOOQNA E-COMMERCE');
}

/*......................Auth......................*/

async function handleSignup(req, res, next) {
  try {
    let userRecord = await users.create(req.body);
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    if (userRecord) {
      let newCart = await cart.create({
        user_id: userRecord.id,

      });
      console.log(newCart);
      let newWishList = await wishlist.create({
        user_id: userRecord.id,
      });
      console.log(newWishList);
    }

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
    next(e.message);
  }
}

async function handleSignIn(req, res, next) {
  try {
    const user = {
      user: req.user,
      token: req.user.token
    };
    if (user.token){
      serverConnection.emit('welcome', user);
      // console.log('welcom ',);
      
     ;  
    }
    res.status(200).json(user);
  } catch (e) {
    next(e.message);
  }
}

/*....................END Auth....................*/

module.exports = {
  //API
  homePage,

  //AUTH
  handleSignup,
  handleGetUsers,
  handleSignIn,

}