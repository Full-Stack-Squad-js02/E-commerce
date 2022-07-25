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
const catagoryModel = require('./category-model');
const typeModel = require('./type-model');
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
const catagoryTabel = catagoryModel(sequelize, DataTypes);
const typeTabel = typeModel(sequelize, DataTypes);
const userTabel = userModel(sequelize, DataTypes);

const productCollection = new Collection(productTabel);
const orderCollection = new Collection(orderTabel);
const cartCollection = new Collection(cartTabel);
const ratingCollection = new Collection(ratingTabel);
const catagoryCollection = new Collection(catagoryTabel);
const typeCollection = new Collection(typeTabel);
const userCollection = new Collection(userTabel);

//RealtionShip:

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
    foreignKey: "user_id",
    sourceKey: "id"
});

orderTabel.belongsTo(userTabel, {
    foreignKey: "user_id",
    targetKey: "id",
});

// User has many ratings
userTabel.hasMany(ratingTabel, {
    foreignKey: "user_id",
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
  through: "order_cart",
  as: "orderTabel",
  foreignKey: "cart_id",
});
orderTabel.belongsToMany(cartTabel, {
  through: "odrer_cart",
  as: "cartTabel",
  foreignKey: "order_id",
});

// Catagory has many products:
catagoryTabel.hasMany(productTabel, {
    foreignKey: "catagory_id",
    sourceKey: "id"
});

productTabel.belongsTo(catagoryTabel, {
    foreignKey: "catagory_id",
    targetKey: "id",
});

// Catagory has many types:
catagoryTabel.hasMany(typeTabel, {
    foreignKey: "catagory_id",
    sourceKey: "id"
});

typeTabel.belongsTo(catagoryTabel, {
    foreignKey: "catagory_id",
    targetKey: "id",
});

module.exports = {
    db: sequelize,
    product: productCollection,
    order: orderCollection,
    cart: cartCollection,
    rating: ratingCollection,
    catagory: catagoryCollection,
    type: typeCollection,
    users: userCollection,
}