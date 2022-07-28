'use strict';

const categoryModel = (sequelize, DataTypes) =>
    sequelize.define('categories', {
        name: {
            type: DataTypes.STRING,
            required: true
        },
        type_id: {
            type: DataTypes.INTEGER,
            // required: true
        },
    });
module.exports = categoryModel;