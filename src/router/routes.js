'use strict';

const express = require('express');
const router = express.Router();
const dataModules = require('../models/data-collection');
const basicAuth = require('../middlewares/basic');
const bearerAuth = require('../middlewares/bearer');
const permissions = require('../middlewares/acl');

const {
    homePage,

    //Product
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    deleteAllProduct,

    //Cart
    createCart,
    getAllCart,
    deleteAllCart,

    //API
    Createorder,
    Updateorder,
    Deleteorder,
    // Wishlist
    createWishlist,
    getAllWishlists,
    deleteWishlists,
    deleteAllWishlists,


    //AUTH
    handleSignup,
    handleGetUsers,
    handleSignin,
    getAllOrder,

} = require('./routes-functions');



const {
    deleteUsers,
    getUsersAdmin,
    getProductAdmin,
    deleteOneProduct
} = require('./adminRoutes');

const {
    //Search
    searchForUser,
    searchForTitleName,
    searchForPriceOfProduct,
    searchForProductColor,
} = require('./search-routes');


router.get('/', homePage);
router.post('/signup', handleSignup);
router.get('/users', bearerAuth, permissions('delete'), handleGetUsers);
router.post('/signin', basicAuth, handleSignin);

router.post('/order', bearerAuth, Createorder);
router.put('/order/:id', bearerAuth, Updateorder);
router.delete('/order/:id', bearerAuth, Deleteorder);
router.get('/order/:id', bearerAuth, getAllOrder);


router.post('/cart', bearerAuth, createCart);
router.get('/cart/:id', bearerAuth, getAllCart);
router.delete('/cart/:id', bearerAuth, deleteAllCart);
router.get('/wishlist/:id', bearerAuth, getAllWishlists);
router.delete('/wishlist/:id', bearerAuth, deleteWishlists);
router.delete('/wishlist', bearerAuth, deleteAllWishlists);
router.delete('/wishlist', bearerAuth, createWishlist);



router.post('/product', bearerAuth, createProduct);
router.get('/product/:id', bearerAuth, getAllProducts);
router.put('/product/:id', bearerAuth, updateProduct);
router.delete('/product/:id', bearerAuth, deleteProduct);
router.delete('/product', bearerAuth, deleteAllProduct);



router.get('/admin/users', bearerAuth, getUsersAdmin);
router.delete('/admin/deleteuser/:id', bearerAuth, deleteUsers);
router.delete('/admin/deleteproduct/:id', bearerAuth, deleteOneProduct);
router.get('/admin/product', bearerAuth, getProductAdmin);




router.get('/searchid', bearerAuth, searchForUser);
router.get('/searchname', bearerAuth, searchForTitleName);
router.get('/searchprice', bearerAuth, searchForPriceOfProduct);
router.get('/searchcolor', bearerAuth, searchForProductColor);

module.exports = router;

