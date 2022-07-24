"use strict";

const orderModel = (sequelize, DataTypes) =>
    sequelize.define("orders", {
        date: {
            type: DataTypes.DATE,
            required: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            required: true,
        },
        status: {
            type: DataTypes.BOOLEAN,
            required: true,
        },
        // foreign key
        order_id: {
            type: DataTypes.INTEGER,
            required: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            required: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            required: true,
        },
    });

module.exports = orderModel;