const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
sequelize.authenticate()
.then(() => {
  console.log('connection has been established successfully.');
})
.catch(err => {
  console.error('unable to connect to the database:', err);
})
module.exports={
    Sequelize,
    sequelize
}
