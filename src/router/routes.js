'use strict';

const express = require('express');
const router = express.Router();
const dataModules = require('../models/data-collection');
const basicAuth = require('../middlewares/basic');
const bearerAuth = require('../middlewares/bearer');
const permissions = require('../middlewares/acl');

const {
    homePage,

    //API
    handleCreateorder,
    handleUpdateorder,
    handleDeleteorder,

    //AUTH
    handleSignup,
    handleGetUsers,
    handleSignin,
    handleCreateCart,
    handleGetAllCart,
    handleDeleteCart,

} = require('./routes-functions');

router.get('/', homePage);
router.post('/signup', handleSignup);
router.get('/users', bearerAuth, permissions('delete'), handleGetUsers);
router.post('/signin', basicAuth, handleSignin);
router.post('/order',bearerAuth, permissions('read'), handleCreateorder);
router.put('/order/:id',bearerAuth, permissions('update'), handleUpdateorder);
router.delete('/order/:id',bearerAuth, permissions('delete'), handleDeleteorder);
router.post('/cart', bearerAuth, handleCreateCart);
router.get('/cart/:id', bearerAuth, handleGetAllCart);
router.delete('/cart/:id', bearerAuth, handleDeleteCart);



module.exports = router;
