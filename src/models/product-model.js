'use strict'

const productModel = (sequelize, DataType) =>
sequelize.define('Products', {
    title: {
        type: DataType.STRING,
        required: true
    },
    description: {
        type: DataType.STRING,

    },
    image:{
        type: DataType.STRING,
        required : true
    },
    price: {
        type: DataType.STRING,
        required: true
    },
    quantity: {
        type: DataType.INTEGER,
        required: true
    },
    category: {
        type: DataType.ENUM('electronics', 'fashion', 'car', 'others'),
        required: true
       
    },
    // foreign key
    cart_id: {
        type: DataType.INTEGER,
        required: true
    },
    user_id: {
        type: DataType.INTEGER,
        required: true
    }
})
module.exports = productModel;
