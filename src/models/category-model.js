'use strict';

const categoryModel = (sequelize, DataType) =>
    sequelize.define('categories', {
        name: {
            type: DataType.STRING,
            required: true
        },
        type_id: {
            type: DataType.INTEGER,
            // required: true
        },
    });
module.exports = categoryModel;