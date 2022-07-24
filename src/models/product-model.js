'use strict'

const productModel = (sequelize, DataType) =>
sequelize.define('Product', {
    title: {
        type: DataType.STRING,
        required: true
    },
    description: {
        type: DataType.STRING,

    },
    image:{
        type: DataType.IMAGE,
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
        type: DataType.ENUM(electronics, fashion, car, others),
        required: true
       
    },
    card_id: {
        type: DataType.INTEGER,
        required: true
    },
    // foreign key
    user_id: {
        type: DataType.INTEGER,
        required: true
    }
})
module.exports = productModel;
