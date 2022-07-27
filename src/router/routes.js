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
    handleCreateorder,
    handleUpdateorder,
    handleDeleteorder,

    //AUTH
    handleSignup,
    handleGetUsers,
    handleSignin,

} = require('./routes-functions');

router.get('/', homePage);
router.post('/signup', handleSignup);
router.get('/users', bearerAuth, permissions('delete'), handleGetUsers);
router.post('/signin', basicAuth, handleSignin);
router.post('/order',bearerAuth, permissions('read'), handleCreateorder);
router.put('/order/:id',bearerAuth, permissions('update'), handleUpdateorder);
router.delete('/order/:id',bearerAuth, permissions('delete'), handleDeleteorder);

router.post('/cart', bearerAuth, createCart);
router.get('/cart/:id', bearerAuth, getAllCart);
router.delete('/cart/:id', bearerAuth, deleteAllCart);



router.post('/product', bearerAuth, createProduct);
router.get('/product/:id', bearerAuth, getAllProducts);
router.put('/product/:id', bearerAuth, updateProduct); //incomlete
router.delete('/product/:id', bearerAuth, deleteProduct); //incomlete
router.delete('/product', bearerAuth, deleteAllProduct);

module.exports = router;
