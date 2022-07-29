'use strict';
const {
    users
} = require('../models/index-model');

async function userInfo(req, res, next) {
    let userId = req.user.id;
    try {
        const userInfo = await users.findOne({
            where: {
                id: userId
            }
        });
        res.status(200).json(userInfo);
    } catch (e) {
        // console.error(e);
        next(e.message);
    }
}

module.exports = userInfo;