'use strict'

const massageModel = (sequelize, DataTypes) =>
  sequelize.define("massages", {
    massage: {
      type: DataTypes.STRING,
      required: true
    },
    status: {
      type: DataTypes.STRING,
    },
    // foreign key
    user_id: {
      type: DataTypes.INTEGER,
    }
  });

module.exports = massageModel;