"use strict";

const cartModel = (sequelize, DataTypes) =>
    sequelize.define("carts", {
        // totalprice: {
        //     type: DataTypes.INTEGER,
        //     required: true,
        //     defaultValue: 0,
        // },
        // quantity: {
        //     type: DataTypes.INTEGER,
        //     required: true,
        //     defaultValue: 0,
        //     // autoIncrement: true,
        // },
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

// const cartModel = (sequelize, DataTypes) =>
//     sequelize.define("carts", {
//          title: {
//             type: DataTypes.STRING,
//             required: true
//         },
//         description: {
//             type: DataTypes.STRING,
//         },
//         image: {
//             type: DataTypes.STRING,
//             required: true
//         },
//         price: {
//             type: DataTypes.STRING,
//             required: true
//         },
//         quantity: {
//             type: DataTypes.INTEGER,
//             required: true
//         },
//         color: {
//             type: DataTypes.STRING,
//         },
//         total_price: {
//             type: DataTypes.INTEGER,
//             required: true,
//         },
//         items: {
//             type: DataTypes.INTEGER,
//             required: true,
//         },
//         // foreign key
//         user_id: {
//             type: DataTypes.INTEGER,
//             // required: true,
//         },
//         product_id: {
//             type: DataTypes.INTEGER,
//             // required: true,
//         },
//         order_id: {
//             type: DataTypes.INTEGER,
//             // required: true,
//         },
//     });

module.exports = cartModel;