const dataBase = require('../utils/dbConnection')
const user = dataBase.sequelize.define('testtable', {
    category_id:{
        type:dataBase.Sequelize.INTEGER
    },
    name: {
      type:dataBase.Sequelize.STRING,
     }
   });
  module.exports={
    user 
}

