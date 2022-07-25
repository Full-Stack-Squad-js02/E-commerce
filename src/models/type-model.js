'use strict';

const typeModel = (sequelize, DataType) =>
    sequelize.define('types', {
        name: {
            type: DataType.STRING,
        },
    });
module.exports = typeModel;