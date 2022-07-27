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
  let allRecords = await product.getAll(id);
  res.status(200).json(allRecords);
}

// async function handleGetOne(req, res) {
//   const id = req.params.id;
//   // console.log(id);
//   let theRecord = await req.model.get(id)
//   res.status(200).json(theRecord);
// }

async function createProduct(req, res) {
  const id = req.user.id;
  let obj = req.body;
  obj.user_id = id;
  let newRecord = await product.create(obj);
  res.status(201).json(newRecord);
}

async function updateProduct(req, res) {
  const id = req.params.id;
  const id2 = req.user.id;
  const obj = req.body;
  obj.user_id = id2;
  let updatedRecord = await product.update(id,obj,id2)
  // res.status(200).json(updatedRecord);

  if (updatedRecord) {
    console.log('uuuuuuuuuuuuuuu',updatedRecord);
      res.status(201).json(updatedRecord);
    } else {
      res.status(403).send(`Access Denid`);
    }
  }

async function deleteProduct(req, res) {
  const id = req.params.id;
  const id2 = req.user.id;
  let deletedRecord = await product.delete(id, id2);
  // console.log('ddddddddddddd',deletedRecord);
  if (deletedRecord == 0) {
    res.status(403).send("Access denied");
  }
  res.status(204).json(deletedRecord);
  // res.status(204).send('Record is deleted Successfully')
}


async function deleteAllProduct(req, res) {
  const id = req.user.id;
  let deletedRecord = await product.deleteAll(id);
  // console.log('ddddddddddddd',deletedRecord);
   if (deletedRecord == 0) {
    res.status(403).send("Access denied");
  }
  res.status(204).json(deletedRecord);
  // res.status(204).send('Record is deleted Successfully')
}




//Auth

/*................Wishlist................*/

async function createWishlist(req, res) {
  const id = req.user.id;
  let obj = req.body;
  obj.user_id = id;
  let newRecord = await wishlist.create(obj);
  res.status(201).json(newRecord);
}

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

/*................Cart................*/
async function createCart(req, res) {
  let id = req.user.id;
  let obj = req.body;
  obj.user_id = id;
  let newRecord = await cart.create(obj);
  res.status(201).json(newRecord);
}

async function getAllCart(req, res) {
  const id = req.params.id;
  const id2 = req.user.id;
  if (id == id2) {
    let allRecords = await cart.getAll(id);
    res.status(200).json(allRecords);
  } else {
    res.send("Access denied");
  }
}

async function deleteAllCart(req, res) {
  // make shore that just user can delete his own cart 
  let id = req.params.id;
  const id2 = req.user.id;
  let deletedRecord = await cart.delete(id, id2);
  if (deletedRecord == 0) {
    res.status(403).send("Access denied");
  }
  res.status(204).json(deletedRecord);
}
/*...............End Cart..............*/

module.exports = {
  //API
  homePage,

  // Products Functions:
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteAllProduct,

  //AUTH
  handleSignup,
  handleGetUsers,
  handleSignin,
  
// handel Wishlist
createWishlist,
getAllWishlists,
deleteWishlists,
deleteAllWishlists,

  //Handle Cart :
  createCart,
  getAllCart,
  deleteAllCart,
}