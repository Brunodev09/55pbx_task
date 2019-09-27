const server = require('./app')
const config = require('./config/config')

server.http.listen(config.port, () => {
  console.log('Listening on :', config.port)
})
