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

} = require('./routes-functions');

router.get('/', homePage);
router.post('/signup', handleSignup);
router.get('/users', bearerAuth, permissions('delete'), handleGetUsers);
router.post('/signin', basicAuth, handleSignin);
router.post('/order',bearerAuth, permissions('read'), handleCreateorder);
router.put('/order',bearerAuth, permissions('update'), handleUpdateorder);
router.delete('/order',bearerAuth, permissions('delete'), handleDeleteorder);

module.exports = router;
