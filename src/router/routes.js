'use strict';

const express = require('express');
const router = express.Router();
const dataModules = require('../models/data-collection');
const basicAuth = require('../middlewares/basic');
const bearerAuth = require('../middlewares/bearer');
const permissions = require('../middlewares/acl');

const addRating = require('./rating-route');


   
const {

    handleSignup,
    handleGetUsers,
    handleSignIn,
    homePage
} = require('./auth-routes');

const {
    // Admin Functions :
    deleteUser,
    getUsersAdmin,
    getProductAdmin,
    deleteOneProductByAdmin,
    createCatagory,
    createType
} = require('./adminRoutes');

const {
    // Search Functions :
    searchForUser,
    searchForTitleName,
    searchForPriceOfProduct,
    searchForProductColor,
} = require('./search-routes');

const {
    // Products Functions :
    getAllProducts,
    createProduct,
    updateProduct,
    deleteOneProduct,
    deleteAllProduct,
} = require('./products-routes');

const {
    // Orders Functions:
    getAllOrder,
    CreateOrder,
    UpdateOrder,
    deleteOneOrder,
    deleteAllOrder,
} = require('./order-routes');

const {
    // Wishlist Functions:
    getAllWishlist,
    createWishlist,
    deleteOneWishlist,
    deleteAllWishlist,
} = require('./wishList-routes');

const {
    //  Cart Functions: 
    getAllCart,
    createCart,
    deleteOneCart,
    deleteAllCart,
} = require('./cart-routes');


const {
    addProductToCart,
    addProductToWishList,
    addProductFromWishListToCart,
    submitOrder,
} = require('./shop-route-functios');

const userInfo = require("./userAccountSetting");

/*..................AUTH ROUTES......................*/
router.get('/', homePage);
router.post('/signup', handleSignup);
router.get('/users', bearerAuth, permissions('delete'), handleGetUsers);
router.post('/signin', basicAuth, handleSignIn);

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
router.post('/wishlist', bearerAuth, createWishlist);//need to cancel it
router.get('/wishlist', bearerAuth, getAllWishlist);//Edit to bring all products
router.delete('/wishlist/:id', bearerAuth, deleteOneWishlist); // Edit to delet one product
router.delete('/wishlist', bearerAuth, deleteAllWishlist);// Edit to delet all product


/*..................Cart ROUTES......................*/
router.post('/cart', bearerAuth, createCart);
router.get('/cart', bearerAuth, getAllCart);
router.delete('/cart/:id', bearerAuth, deleteOneCart); //make to delete one product from cart not from source
router.delete('/cart', bearerAuth, deleteAllCart);


/*..................Admin ROUTES......................*/
router.get('/admin/users', bearerAuth, getUsersAdmin);
router.get('/admin/product', bearerAuth, getProductAdmin);
router.post('/admin/catagory',bearerAuth,createCatagory);
router.post('/admin',bearerAuth,createType);
router.delete('/admin/deleteuser/:id', bearerAuth, deleteUser);
router.delete('/admin/deleteproduct/:id', bearerAuth, deleteOneProductByAdmin);


/*..................Search ROUTES......................*/
router.get('/searchid', bearerAuth, searchForUser);
router.get('/searchname', bearerAuth, searchForTitleName);
router.get('/searchprice', bearerAuth, searchForPriceOfProduct);
router.get('/searchcolor', bearerAuth, searchForProductColor);

/*..................Shop ROUTES......................*/
router.post('/addtocart/:id', bearerAuth, addProductToCart);
router.post('/addtowishlist/:id', bearerAuth, addProductToWishList);
router.post('/productfromwishlisttocart/:id', bearerAuth, addProductFromWishListToCart);
router.post('/submitorder', bearerAuth, submitOrder);

router.get('/userinfo', bearerAuth, userInfo);

/*..................Rating ROUTES......................*/
router.post('/rating/:id',bearerAuth,addRating);

module.exports = router;
