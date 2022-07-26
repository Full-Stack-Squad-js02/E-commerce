"use strict";

const cartModel = (sequelize, DataTypes) =>
    sequelize.define("carts", {
        // id: {
        //     type: DataTypes.INTEGER,
        //     required: true,
        // },
        price: {
            type: DataTypes.INTEGER,
            required: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            required: true,
        },
        // foreign key
        user_id: {
            type: DataTypes.INTEGER,
            // required: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            // required: true,
        },
        order_id: {
            type: DataTypes.INTEGER,
            // required: true,
        },
    });

module.exports = cartModel;