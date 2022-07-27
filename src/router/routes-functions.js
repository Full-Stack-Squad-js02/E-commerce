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


//Auth

/*................Wishlist................*/

async function getAllWishlists(req, res) {
  const id = req.params.id;
  let allRecords = await  wishlist.getAll(id);
  res.status(200).json(allRecords);
}
async function deleteWishlists(req, res) {
  const id = req.params.id;
  const id2 = req.user.id;
  let deletedRecord = await  wishlist.delete(id, id2);
 
  if (deletedRecord == 0) {
    res.status(403).send("Access denied");
  }
  res.status(204).json(deletedRecord);
  
}


async function deleteAllWishlists(req, res) {
  const id = req.user.id;
  let deletedRecord = await  wishlist.deleteAll(id);
  
   if (deletedRecord == 0) {
    res.status(403).send("Access denied");
  }
  res.status(204).json(deletedRecord);
  
}

/*................End Wishlist................*/


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
  //AUTH
  handleSignup,
  handleGetUsers,
  handleSignin,
  
// handel Wishlist
getAllWishlists,
deleteWishlists,
deleteAllWishlists

}