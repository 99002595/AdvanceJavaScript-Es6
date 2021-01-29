const bodyParser = require('body-parser')
const getUsers = require('./getAllUsers')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')
const addUser = require('./addUser')
const mainRoute = (app) => {
  app.use(bodyParser.json())
  app.use(`/getUsers`, getUsers)
  app.use(`/updateUsers`,  updateUser)
  app.use(`/deleteUsers`, deleteUser)
  app.use(`/addUsers`, addUser )

}
module.exports = mainRoute
