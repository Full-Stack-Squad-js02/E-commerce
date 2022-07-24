'use strict'

const ratingModel = (sequelize, DataType) =>
sequelize.define('ratings', {
    name: {
        type: DataType.STRING,
        required: true
    },
    description: {
        type: DataType.STRING,
        required: true

    },
    rating: {
        type: DataType.INTEGER,
        required: true
    },
    // foreign key
    product_id: {
        type: DataType.INTEGER,
        required: true
    },
    user_id: {
        type: DataType.INTEGER,
        required: true
    }
})
module.exports = ratingModel;
