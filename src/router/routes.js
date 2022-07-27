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

    //AUTH
    handleSignup,
    handleGetUsers,
    handleSignin,
    getAllOrder,

} = require('./routes-functions');

router.get('/', homePage);
router.post('/signup', handleSignup);
router.get('/users', bearerAuth, permissions('delete'), handleGetUsers);
router.post('/signin', basicAuth, handleSignin);

router.post('/order',bearerAuth, Createorder);
router.put('/order/:id',bearerAuth,Updateorder);
router.delete('/order/:id',bearerAuth, Deleteorder);
router.get('/order/:id', bearerAuth, getAllOrder);


router.post('/cart', bearerAuth, createCart);
router.get('/cart/:id', bearerAuth, getAllCart);
router.delete('/cart/:id', bearerAuth, deleteAllCart);




router.post('/product', bearerAuth, createProduct);
router.get('/product/:id', bearerAuth, getAllProducts);
router.put('/product/:id', bearerAuth, updateProduct); //incomlete
router.delete('/product/:id', bearerAuth, deleteProduct); //incomlete
router.delete('/product', bearerAuth, deleteAllProduct);

module.exports = router;
