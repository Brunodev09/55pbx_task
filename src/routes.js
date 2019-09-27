const app = require('express')

const routes = app.Router()

routes.get('/', (req, res) => {
  res.send('Index vazia')
})

module.exports = routes
