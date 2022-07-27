'use strict'

const wishListModel = (sequelize, DataType) =>
sequelize.define('wishlists', {
   
    product_id: {
        type: DataType.INTEGER,
        // required: true
    },
    user_id: {
        type: DataType.INTEGER,
        // required: true
    }
})
module.exports = wishListModel;
