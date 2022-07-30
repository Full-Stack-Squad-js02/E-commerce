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
addRating

} = require('./routes-functions');


const addProductToCart=require('./shop-route-functios');


const {
    deleteUsers,
    getUsersAdmin,
    getProductAdmin,
    deleteOneProductByAdmin,
    createCatagory,
    createType
} = require('./adminRoutes');

const {
    //Search
    searchForUser,
    searchForTitleName,
    searchForPriceOfProduct,
    searchForProductColor,
} = require('./search-routes');

const userInfo = require("./userAccountSetting");

/*..................AUTH ROUTES......................*/
router.get('/', homePage);
router.post('/signup', handleSignup);
router.get('/users', bearerAuth, permissions('delete'), handleGetUsers);
router.post('/signin', basicAuth, handleSignin);

/*..................Product ROUTES......................*/
router.post('/product', bearerAuth, createProduct);
router.get('/product', bearerAuth, getAllProducts);
router.put('/product/:id', bearerAuth, updateProduct);
router.delete('/product/:id', bearerAuth, deleteOneProduct);
router.delete('/product', bearerAuth, deleteAllProduct);


/*..................Order ROUTES......................*/
router.post('/order', bearerAuth, CreateOrder);
router.get('/order', bearerAuth, getAllOrder);
router.put('/order/:id', bearerAuth, UpdateOrder);
router.delete('/order/:id', bearerAuth, deleteOneOrder);
router.delete('/order', bearerAuth, deleteAllOrder);

/*..................Wishlist ROUTES......................*/
router.post('/wishlist', bearerAuth, createWishlist);
router.get('/wishlist/:id', bearerAuth, getAllWishlist);
router.delete('/wishlist/:id', bearerAuth, deleteOneWishlist);
router.delete('/wishlist', bearerAuth, deleteAllWishlist);


/*..................Cart ROUTES......................*/
router.post('/cart', bearerAuth, createCart);
router.get('/cart', bearerAuth, getAllCart);
router.delete('/cart/:id', bearerAuth, deleteOneCart);//make to delete one product from cart not from source
router.delete('/cart', bearerAuth, deleteAllCart);


/*..................Admin ROUTES......................*/
router.get('/admin/users', bearerAuth, getUsersAdmin);
router.delete('/admin/deleteuser/:id', bearerAuth, deleteUsers);
router.delete('/admin/deleteproduct/:id', bearerAuth, deleteOneProductByAdmin);
router.get('/admin/product', bearerAuth, getProductAdmin);
router.post('/admin/catagory',bearerAuth,createCatagory);
router.post('/admin/type',bearerAuth,createType);

/*..................Search ROUTES......................*/
router.get('/searchid', bearerAuth, searchForUser);
router.get('/searchname', bearerAuth, searchForTitleName);
router.get('/searchprice', bearerAuth, searchForPriceOfProduct);
router.get('/searchcolor', bearerAuth, searchForProductColor);


router.post('/productcart/:id', bearerAuth, addProductToCart);


router.get('/userinfo', bearerAuth, userInfo);

router.post('/rating/:id',bearerAuth,addRating);

module.exports = router;

