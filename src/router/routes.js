'use strict';

const express = require('express');
const router = express.Router();
const dataModules = require('../models/data-collection');
const basicAuth = require('../middlewares/basic');
const bearerAuth = require('../middlewares/bearer');
const permissions = require('../middlewares/acl');

const {
    //API
    homePage,

    //AUTH
    handleSignup,
    handleGetUsers,
    handleSignin,

    // Products Functions:
    getAllProducts,
    createProduct,
    updateProduct,
    deleteOneProduct,
    deleteAllProduct,

    // Order Functions:
    getAllOrder,
    CreateOrder,
    UpdateOrder,
    deleteOneOrder,
    deleteAllOrder,

    // Wishlist Functions:
    getAllWishlist,
    createWishlist,
    deleteOneWishlist,
    deleteAllWishlist,

    //  Cart Functions: 
    getAllCart,
    createCart,
    deleteOneCart,
    deleteAllCart,

    


} = require('./routes-functions');

const addProductToCart=require('./shop-route-functios');

router.get('/', homePage);
router.post('/signup', handleSignup);
router.get('/users', bearerAuth, permissions('delete'), handleGetUsers);
router.post('/signin', basicAuth, handleSignin);


router.post('/product', bearerAuth, createProduct);
router.get('/product', bearerAuth, getAllProducts);
router.put('/product/:id', bearerAuth, updateProduct);
router.delete('/product/:id', bearerAuth, deleteOneProduct);
router.delete('/product', bearerAuth, deleteAllProduct);


router.post('/order', bearerAuth, CreateOrder);
router.get('/order', bearerAuth, getAllOrder);
router.put('/order/:id', bearerAuth, UpdateOrder);
router.delete('/order/:id', bearerAuth, deleteOneOrder);
router.delete('/order', bearerAuth, deleteAllOrder);

router.post('/wishlist', bearerAuth, createWishlist);
router.get('/wishlist/:id', bearerAuth, getAllWishlist);
router.delete('/wishlist/:id', bearerAuth, deleteOneWishlist);
router.delete('/wishlist', bearerAuth, deleteAllWishlist);

router.post('/cart', bearerAuth, createCart);
router.get('/cart', bearerAuth, getAllCart);
router.delete('/cart/:id', bearerAuth, deleteOneCart);//make to delete one product from cart not from source
router.delete('/cart', bearerAuth, deleteAllCart);

router.get('/productcart/:id', bearerAuth, addProductToCart);





module.exports = router;
