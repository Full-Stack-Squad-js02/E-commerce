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
    DeleteProduct,
    DeleteAllProduct,
    //AUTH
    handleSignup,
    handleGetUsers,
    handleSignin,

} = require('./routes-functions');

router.get('/', homePage);
router.post('/signup', handleSignup);
router.get('/users', bearerAuth, permissions('delete'), handleGetUsers);
router.post('/signin', basicAuth, handleSignin);

router.post('/product', bearerAuth, createProduct);
router.get('/product/:id', bearerAuth, getAllProducts);
router.get('/product/:id', bearerAuth, updateProduct);//incomlete
router.get('/product/:id', bearerAuth, DeleteProduct);//incomlete
router.get('/product', bearerAuth, DeleteAllProduct);

module.exports = router;
