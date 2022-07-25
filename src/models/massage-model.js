'use strict'

const massageModel = (sequelize, DataType) =>
sequelize.define("massages", {
  
  massage: {
    type: DataType.STRING,
    required: true
},
status: {
    type: DataTypes.STRING,
   
},
    // foreign key
  user_id: {
    type: DataType.INTEGER,
    
}
})