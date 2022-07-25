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
            type: DataTypes.STRING,
            required: true,
        },
        adress: {
            type: DataTypes.STRING,
        },
        payment_method: {
            type: DataTypes.STRING,
        },
        total_price: {
            type: DataTypes.STRING,
        },
        // foreign key
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