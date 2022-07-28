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

    // Wishlist
    createWishlist,
    getAllWishlists,
    deleteWishlists,
    deleteAllWishlists,


    //AUTH
    handleSignup,
    handleGetUsers,
    handleSignin,

} = require('./routes-functions');

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
router.post('/cart', bearerAuth, createCart);
router.get('/cart/:id', bearerAuth, getAllCart);
router.delete('/cart/:id', bearerAuth, deleteAllCart);
router.get('/wishlist/:id', bearerAuth, getAllWishlists);
router.delete('/wishlist/:id', bearerAuth, deleteWishlists);
router.delete('/wishlist', bearerAuth, deleteAllWishlists);
router.delete('/wishlist', bearerAuth, createWishlist);


router.post('/product', bearerAuth, createProduct);
router.get('/product/:id', bearerAuth, getAllProducts);
router.put('/product/:id', bearerAuth, updateProduct); //incomlete
router.delete('/product/:id', bearerAuth, deleteProduct); //incomlete
router.delete('/product', bearerAuth, deleteAllProduct);

router.get('/searchid', bearerAuth, searchForUser);
router.get('/searchname', bearerAuth, searchForTitleName);
router.get('/searchprice', bearerAuth, searchForPriceOfProduct);
router.get('/searchcolor', bearerAuth, searchForProductColor);

module.exports = router;
