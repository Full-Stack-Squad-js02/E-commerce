'use strict';

const express = require('express');
const router = express.Router();
// const dataModules = require('../models/data-collection');
const basicAuth = require('../middlewares/basic');
const bearerAuth = require('../middlewares/bearer');
const permissions = require('../middlewares/acl');


const {
    // AUTH Functions :
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
    createType,
    getAllConfirmedOrderByAdmin,
    confirmOrdersByAdmin,
} = require('./adminRoutes');

const {
    // Products Functions :
    getAllProducts,
    createProduct,
    updateProduct,
    deleteOneProduct,
    deleteAllProduct,
    getOneProduct,
} = require('./products-routes');

const {
    // Orders Functions :
    getAllOrder,
    CreateOrder,
    UpdateOrder,
    deleteOneOrder,
    deleteAllOrder,
} = require('./order-routes');

const {
    // Wishlist Functions :
    getAllWishlist,
    createWishlist,
    deleteOneWishlist,
    deleteAllWishlist,
} = require('./wishList-routes');

const {
    //  Cart Functions : 
    getAllCart,
    createCart,
    deleteOneCart,
    deleteAllCart,
} = require('./cart-routes');

const {
    // Search Functions :
    searchForUser,
    searchForTitleName,
    searchForPriceOfProduct,
    searchForProductColor,
    searchCategory,
} = require('./search-routes');

const {
    //Shopping Functions :
    addProductToCart,
    addProductToWishList,
    addProductFromWishListToCart,
    submitOrder,
    confirmOrder,
    reciveOrder,
} = require('./shop-route-functios');

const {
    // Setting Functions for User profile :
    userInfo,
    updateUserProfile,
    deleteUserProfile,
} = require("./userAccountSetting");

const createShipping = require("./shippingRoutes");

const {
    //Rating Functions :
    addRating,
    getRating
} = require('./rating-route');

const {
    // Messageing Functions :
    joinConversation,
    sendMessage,
    getMessgesBetweenUsers,
    getAllMessages,

} = require("./meseging");



/*..................AUTH ROUTES......................*/
router.get('/', homePage);
router.post('/signup', handleSignup);
router.get('/users', bearerAuth, permissions('delete'), handleGetUsers);
router.post('/signin', basicAuth, handleSignIn);

/*..................Admin ROUTES......................*/
router.get('/admin/users', bearerAuth, getUsersAdmin);
router.get('/admin/product', bearerAuth, getProductAdmin);
router.get('/admin/confirmedorder', bearerAuth, getAllConfirmedOrderByAdmin);
router.post('/admin/catagory', bearerAuth, createCatagory);
router.post('/admin/type', bearerAuth, createType);
router.put('/admin/confirmorders', bearerAuth, confirmOrdersByAdmin);
router.delete('/admin/deleteuser/:id', bearerAuth, deleteUser);
router.delete('/admin/deleteproduct/:id', bearerAuth, deleteOneProductByAdmin);

/*..................Product ROUTES......................*/
router.post('/product', bearerAuth, createProduct);
router.get('/product', bearerAuth, getAllProducts);
router.get('/product/:id', bearerAuth, getOneProduct);
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
router.post('/wishlist', bearerAuth, createWishlist); //need to cancel it
router.get('/wishlist', bearerAuth, getAllWishlist); //Edit to bring all products
router.delete('/wishlist/:id', bearerAuth, deleteOneWishlist); // Edit to delet one product
router.delete('/wishlist', bearerAuth, deleteAllWishlist); // Edit to delet all product

/*..................Cart ROUTES......................*/
router.post('/cart', bearerAuth, createCart);
router.get('/cart', bearerAuth, getAllCart);
router.delete('/cart/:id', bearerAuth, deleteOneCart); //make to delete one product from cart not from source
router.delete('/cart', bearerAuth, deleteAllCart);


/*..................Search ROUTES......................*/
router.get('/searchid', bearerAuth, searchForUser);
router.get('/searchname', bearerAuth, searchForTitleName);
router.get('/searchprice', bearerAuth, searchForPriceOfProduct);
router.get('/searchcolor', bearerAuth, searchForProductColor);
router.get('/searchcategory', bearerAuth, searchCategory);

/*..................Shop ROUTES......................*/
router.post('/addtocart/:id', bearerAuth, addProductToCart);
router.post('/addtowishlist/:id', bearerAuth, addProductToWishList);
router.post('/productfromwishlisttocart/:id', bearerAuth, addProductFromWishListToCart);
router.post('/submitorder', bearerAuth, submitOrder);
router.put('/confirmorder', bearerAuth, confirmOrder);
router.put('/reciveorder', bearerAuth, reciveOrder);

/*..................User Setting ROUTES......................*/
router.get('/userinfo', bearerAuth, userInfo); // we can handel it in frontend , we don't need this userInfo route
router.put('/updateprofile', bearerAuth, updateUserProfile);
router.delete('/deleteprofile', bearerAuth, deleteUserProfile);

/*..................Rating ROUTES......................*/
router.get('/rating/:id', bearerAuth, getRating);
router.post('/rating/:id', bearerAuth, addRating);

/*............... Shipping ROUTES ...................*/
router.post('/shipping/:id', bearerAuth, createShipping);


/*............... Messages / Chat ROUTES...................*/
router.post('/joinroom/:id', bearerAuth, joinConversation);
router.post('/sendmessage/:id', bearerAuth, sendMessage);
router.get('/allmessages/:id', bearerAuth, getMessgesBetweenUsers);
router.get('/allmessages', bearerAuth, getAllMessages);


module.exports = router;
