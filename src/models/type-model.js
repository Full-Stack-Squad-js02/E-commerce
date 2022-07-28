'use strict';

const typeModel = (sequelize, DataTypes) =>
    sequelize.define('types', {
        name: {
            type: DataTypes.STRING,
        },
    });
module.exports = typeModel;