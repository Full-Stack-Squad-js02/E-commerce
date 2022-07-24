'use strict';

require('dotenv').config();

const {
    Sequelize,
    DataTypes
} = require('sequelize');
const productModel = require('./product-model');
const orderModel = require('./order-model');
const cartModel = require('./cart-model');
const ratingModel = require('./rating-model');
const userModel = require('./user-model');
const Collection = require('./data-collection');

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

let sequelizeOptions =
    process.env.NODE_ENV === "production" ? {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            },
            native: true
        }
    } : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const productTabel = productModel(sequelize, DataTypes);
const orderTabel = orderModel(sequelize, DataTypes);
const cartTabel = cartModel(sequelize, DataTypes);
const ratingTabel = ratingModel(sequelize, DataTypes);
const userTabel = userModel(sequelize, DataTypes);

const productCollection = new Collection(productTabel);
const orderCollection = new Collection(orderTabel);
const cartCollection = new Collection(cartTabel);
const ratingCollection = new Collection(ratingTabel);
const userCollection = new Collection(userTabel);

// User RealtionShip:

// User has many products:
userTabel.hasMany(productTabel, {
    foreignKey: "user_id",
    sourceKey: "id"
});

productTabel.belongsTo(userTabel, {
    foreignKey: "user_id",
    targetKey: "id",
});

// User has many orders
userTabel.hasMany(orderTabel, {
    foreignKey: "user_Id",
    sourceKey: "id"
});

orderTabel.belongsTo(userTabel, {
    foreignKey: "user_id",
    targetKey: "id",
});

// User has many ratings
userTabel.hasMany(ratingTabel, {
    foreignKey: "user_Id",
    sourceKey: "id"
});

ratingTabel.belongsTo(userTabel, {
    foreignKey: "user_id",
    targetKey: "id",
});

// User has one Cart
userTabel.hasOne(cartTabel, {
    foreignKey: 'user_id',
    targetKey: 'id'
});
cartTabel.belongsTo(userTabel, {
    foreignKey: 'user_id',
    targetKey: 'id'
});

// Cart has many Products

cartTabel.hasMany(productTabel, {
    foreignKey: "cart_id",
    sourceKey: "id"
});

productTabel.belongsTo(cartTabel, {
    foreignKey: "cart_id",
    targetKey: "id",
});

// Order has many product

orderTabel.hasMany(productTabel, {
    foreignKey: "order_id",
    sourceKey: "id"
});

productTabel.belongsTo(orderTabel, {
    foreignKey: "order_id",
    targetKey: "id",
});

// Product has many ratings

productTabel.hasMany(ratingTabel, {
    foreignKey: "order_id",
    sourceKey: "id"
});

ratingTabel.belongsTo(productTabel, {
    foreignKey: "order_id",
    targetKey: "id",
});

// Cart many to many orders

cartTabel.belongsToMany(orderTabel, {
//   through: "tutorial_tag",
//   as: "tags",
  foreignKey: "order_id",
});
orderTabel.belongsToMany(cartTabel, {
//   through: "tutorial_tag",
//   as: "tutorials",
  foreignKey: "order_id",
});

module.exports = {
    db: sequelize,
    product: productCollection,
    order: orderCollection,
    cart: cartCollection,
    rating: ratingCollection,
    users: userCollection,
}