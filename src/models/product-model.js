'use strict';

const productModel = (sequelize, DataType) =>
    sequelize.define('Products', {
        title: {
            type: DataType.STRING,
            required: true
        },
        description: {
            type: DataType.STRING,
        },
        image: {
            type: DataType.STRING,
            required: true
        },
        price: {
            type: DataType.STRING,
            required: true
        },
        quantity: {
            type: DataType.INTEGER,
            required: true
        },
        color: {
            type: DataType.STRING,
        },
        // foreign key
        cart_id: {
            type: DataType.INTEGER,
            required: true
        },
        user_id: {
            type: DataType.INTEGER,
            required: true
        },
        category_id: {
            type: DataType.INTEGER,
            required: true
        },
        wishlist_id: {
            type: DataType.INTEGER,
        },
    });
module.exports = productModel;
